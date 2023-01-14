import { c as create_ssr_component, b as subscribe, e as escape } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>Admin</h1>

<p>Welcome ${escape($page.data.user.name)}!</p>


<a data-sveltekit-preload-code="${"eager"}" href="${"/admin/user-management"}">Manage Users</a>
<form action="${"/logout"}" method="${"POST"}"><button type="${"submit"}">Log out</button></form>`;
});
export {
  Page as default
};
