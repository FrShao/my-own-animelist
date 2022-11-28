import { c as create_ssr_component, b as subscribe, i as is_promise, n as noop, d as add_attribute, e as escape } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".poster.svelte-1e45vqh.svelte-1e45vqh{position:relative;display:flex;flex-direction:column;flex-wrap:nowrap}.banner.svelte-1e45vqh.svelte-1e45vqh{width:100%;height:400px}.banner.svelte-1e45vqh img.svelte-1e45vqh{width:100%;height:100%;object-fit:cover;image-rendering:pixelated;filter:blur(5px)\r\n    }.anime-informations.svelte-1e45vqh.svelte-1e45vqh{position:relative;background-color:white;box-shadow:0 -120px 150px;height:250px;display:flex;flex-direction:row;flex-wrap:nowrap}.anime-informations.svelte-1e45vqh .anime-desc.svelte-1e45vqh{display:flex;flex-direction:column;position:absolute;left:430px;width:calc(100vw - 545px)}.anime-title.svelte-1e45vqh.svelte-1e45vqh{margin:20px 0 20px 0;font-weight:600;font-size:large}.anime-synopsis.svelte-1e45vqh.svelte-1e45vqh{font-size:11pt}.overlap.svelte-1e45vqh.svelte-1e45vqh{display:flex;flex-direction:column;position:absolute;top:270px;left:150px}.overlap-informations.svelte-1e45vqh.svelte-1e45vqh{display:flex;flex-direction:row;flex-wrap:nowrap;gap:20px}.anime-thumbnail.svelte-1e45vqh.svelte-1e45vqh{width:230px;height:340px}.anime-thumbnail.svelte-1e45vqh img.svelte-1e45vqh{width:100%;height:100%;border-radius:5px;object-fit:cover}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let id = $page.params.id;
  async function getInfos() {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
    if (!res.ok || res.status === 404)
      return [];
    let json = await res.json();
    return json;
  }
  let infos = getInfos();
  $$result.css.add(css);
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
            <div class="${"poster svelte-1e45vqh"}"><div class="${"banner svelte-1e45vqh"}"><img${add_attribute("src", infos2.data.images.webp.large_image_url, 0)} alt="${escape(infos2.data.title, true) + "-banner.jpg"}" class="${"svelte-1e45vqh"}"></div>
                <div class="${"anime-informations svelte-1e45vqh"}"><div class="${"anime-desc svelte-1e45vqh"}"><div class="${"anime-title svelte-1e45vqh"}">${escape(infos2.data.title)}</div>
                        <div class="${"anime-synopsis svelte-1e45vqh"}">${escape(infos2.data.synopsis)}</div></div>
                    <div class="${"anime-informations-menu"}">menu 
                    </div></div>

                <div class="${"overlap svelte-1e45vqh"}"><div class="${"overlap-informations svelte-1e45vqh"}"><div class="${"anime-thumbnail svelte-1e45vqh"}"><img${add_attribute("src", infos2.data.images.jpg.image_url, 0)} alt="${escape(infos2.data.title, true) + ".jpg"}" class="${"svelte-1e45vqh"}"></div></div>
                    <div class="${"overlap-buttons"}"><div>Add to list</div>
                        <div>favorite</div></div></div></div>
        `;
    }(__value);
  }(infos)}
</main>`;
});
export {
  Page as default
};
