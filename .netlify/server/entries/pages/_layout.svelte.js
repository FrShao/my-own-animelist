import { c as create_ssr_component, b as subscribe } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1j919da{margin:0;background-color:#2F4858}.sticky.svelte-1j919da{position:sticky;padding:0;z-index:1;transition:all 0.3s;top:0}.sticky.isStuck.svelte-1j919da{background:mintcream;box-shadow:0px 0px 1px 0px rgba(0, 0, 0, 0.2),\r\n            0px 0px 6px 0px rgba(0, 0, 0, 0.3)}.logo.svelte-1j919da{background-color:red}ul.svelte-1j919da{list-style-type:none;display:flex;flex-direction:row;padding:0;margin:0}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-tdpiw6_START -->${$$result.title = `<title>SvelteKit Auth</title>`, ""}<!-- HEAD_svelte-tdpiw6_END -->`, ""}

<section><nav id="${"nav"}" class="${["sticky svelte-1j919da", ""].join(" ").trim()}"><div class="${"logo svelte-1j919da"}"><img src="${""}" alt="${""}"></div>
        <ul class="${"svelte-1j919da"}"><li><a href="${"/"}">Home</a></li>
        <li><a href="${"/animes"}">Animes</a></li>
        <li><a href="${"/mangas"}">Mangas</a></li></ul>

        ${!$page.data.user ? `<a href="${"/login"}">Login</a>
            <a href="${"/register"}">Register</a>` : ``}

        ${$page.data.user ? `${$page.data.user.role === "ADMIN" ? `<a href="${"/admin"}">Admin</a>` : `<a href="${"/profile"}">Profile</a>`}
            
            <form action="${"/logout"}" method="${"POST"}"><button type="${"submit"}">Log out</button></form>` : ``}</nav>

  ${slots.default ? slots.default({}) : ``}
</section>`;
});
export {
  Layout as default
};
