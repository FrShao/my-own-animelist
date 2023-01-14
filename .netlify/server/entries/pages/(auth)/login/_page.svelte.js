import { c as create_ssr_component } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<h1>Login</h1>

<form action="${"?/login"}" method="${"POST"}"><div><label for="${"username"}">Username</label>
    <input id="${"username"}" name="${"username"}" type="${"text"}" required></div>

  <div><label for="${"password"}">Password</label>
    <input id="${"password"}" name="${"password"}" type="${"password"}" required></div>

  ${(form == null ? void 0 : form.invalid) ? `<p class="${"error"}">Username and password is required.</p>` : ``}

  ${(form == null ? void 0 : form.credentials) ? `<p class="${"error"}">You have entered the wrong credentials.</p>` : ``}

  <button type="${"submit"}">Log in</button></form>`;
});
export {
  Page as default
};
