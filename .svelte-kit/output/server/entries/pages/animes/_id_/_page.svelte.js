import { c as create_ssr_component, b as subscribe, i as is_promise, n as noop, d as add_attribute, e as escape } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { id = $page.params.id } = $$props;
  async function getInfos() {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
    if (!res.ok || res.status === 404)
      return [];
    let json = await res.json();
    return json;
  }
  let infos = getInfos();
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$unsubscribe_page();
  return `<main>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        <div>Waiting for informations ...</div>
        `;
    }
    return function(infos2) {
      return ` 
            <div class="${"poster"}"><div class="${"banner"}"><img${add_attribute("src", infos2.data.images.jpg.large_image_url, 0)} alt="${escape(infos2.data.title, true) + "-banner.jpg"}"></div>
                <div class="${"thumbnail-card"}"><div class="${"thumbnail"}"><img src="${""}" alt="${""}"></div>
                    <div class="${"thumbnail-buttons"}"><div>Add to list</div>
                        <div>favorite</div></div></div></div>
    `;
    }(__value);
  }(infos)}</main>`;
});
export {
  Page as default
};
