import { c as create_ssr_component, b as subscribe, e as escape, o as add_attribute } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$unsubscribe_page();
  return `<h1>Profile</h1>

${$page.data.user ? `<p>Welcome ${escape($page.data.user.name)}!</p>` : ``}

${$page.data.user.role === "ADMIN" ? `<form action="${"/logout"}" method="${"POST"}"><button type="${"submit"}">Log out</button></form>` : ``}

<form action="${"?/editUser"}" method="${"POST"}"><div><label for="${"username"}">Username</label>
        <input id="${"username"}" name="${"username"}" type="${"text"}" required${add_attribute("value", $page.data.user.name, 0)}></div>

    <div><label for="${"password"}">Password</label>
        <input id="${"password"}" name="${"password"}" type="${"password"}"></div>

    ${(form == null ? void 0 : form.user) ? `<p class="${"error"}">Username is taken.</p>` : ``}

    <button type="${"submit"}">Change</button></form>

<form action="${"?/uploadFile"}" method="${"POST"}"><input type="${"file"}">

    <button type="${"submit"}">Change</button></form>`;
});
export {
  Page as default
};
