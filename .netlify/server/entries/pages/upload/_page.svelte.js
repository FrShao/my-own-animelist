import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page.svelte-81kct{background:white;padding:3rem;display:flex;justify-content:center;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"page svelte-81kct"}"><form enctype="${"multipart/form-data"}" method="${"post"}" action="${"?/upload"}"><h1>Upload Image</h1>

      <input accept="${"image/*"}" type="${"file"}" name="${"image"}">

      <button>Upload</button></form>
</div>`;
});
export {
  Page as default
};
