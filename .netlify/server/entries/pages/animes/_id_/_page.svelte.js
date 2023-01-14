import { c as create_ssr_component, z as each, o as add_attribute, e as escape, b as subscribe, y as is_promise, n as noop, v as validate_component } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
const star = "/_app/immutable/assets/score-star-light-55b87b52.svg";
const ActionButton_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".action-button.svelte-gvwz9g.svelte-gvwz9g{height:50px;width:100%;position:relative;display:flex;justify-content:center;align-items:center;border:0;border-radius:8px;box-sizing:border-box;color:#FFFFFF;background-color:var(--button-color);border:2px solid var(--button-color);padding:3px;user-select:none;touch-action:manipulation;cursor:pointer;appearance:none;transition:all 300ms cubic-bezier(.23, 1, 0.32, 1);overflow:hidden;outline:none}.action-button.svelte-gvwz9g.svelte-gvwz9g:hover{background-color:yellow}.action-button.svelte-gvwz9g span.svelte-gvwz9g{background-color:rgb(5, 6, 45);padding:0;border-radius:6px;width:fit-content;height:fit-content;transition:300ms;background:none}.action-button.svelte-gvwz9g:hover span.svelte-gvwz9g{background:none}.action-button.svelte-gvwz9g.svelte-gvwz9g:hover{box-shadow:rgba(0, 0, 0, 0.25) 0 8px 15px;transform:translateY(-2px)}.action-button.svelte-gvwz9g.svelte-gvwz9g:active{box-shadow:none;transform:translateY(0)}",
  map: null
};
const ActionButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { action = "" } = $$props;
  let { color = "red" } = $$props;
  let { text = "ULTIMATE BUTTON made by Shao" } = $$props;
  let { actions = [] } = $$props;
  let { colors = [] } = $$props;
  let { texts = [] } = $$props;
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0)
    $$bindings.actions(actions);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0)
    $$bindings.texts(texts);
  $$result.css.add(css$1);
  return `<section><form method="${"post"}">${actions.length > 0 ? `${each(actions, (action2, index) => {
    return `<button${add_attribute("formaction", action2, 0)} class="${"action-button svelte-gvwz9g"}" style="${"--button-color: " + escape(colors[index], true) + ";"}"><span class="${"svelte-gvwz9g"}">${escape(texts[index])}</span>
                </button>`;
  })}` : `<button${add_attribute("formaction", action, 0)} class="${"action-button svelte-gvwz9g"}" style="${"--button-color: " + escape(color, true) + ";"}"><span class="${"svelte-gvwz9g"}">${escape(text)}</span></button>`}</form>
</section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".poster.svelte-1reb5a0.svelte-1reb5a0{position:relative;display:flex;flex-direction:column;flex-wrap:nowrap;margin-bottom:20px}.banner.svelte-1reb5a0.svelte-1reb5a0{width:100%;height:400px}.banner.svelte-1reb5a0 img.svelte-1reb5a0{width:100%;height:100%;object-fit:cover;image-rendering:pixelated;filter:blur(5px)\r\n    }.anime-informations.svelte-1reb5a0.svelte-1reb5a0{position:relative;background-color:white;box-shadow:0 -120px 150px black;min-height:250px;height:min-content;display:flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden}.anime-informations.svelte-1reb5a0 .anime-desc.svelte-1reb5a0{display:flex;flex-direction:column;position:absolute;left:430px;width:auto;margin-right:150px}.anime-title.svelte-1reb5a0.svelte-1reb5a0{margin:20px 0 20px 0;font-weight:600;font-size:large}.anime-synopsis.svelte-1reb5a0.svelte-1reb5a0{font-size:14px}.overlap.svelte-1reb5a0.svelte-1reb5a0{display:flex;flex-direction:column;position:absolute;top:40%;left:150px}.overlap-informations.svelte-1reb5a0.svelte-1reb5a0{display:flex;flex-direction:row;flex-wrap:nowrap;gap:20px}.anime-thumbnail.svelte-1reb5a0.svelte-1reb5a0{width:230px;height:340px}.anime-thumbnail.svelte-1reb5a0 img.svelte-1reb5a0{width:100%;height:100%;border-radius:5px;object-fit:cover}.lower-wrap.svelte-1reb5a0.svelte-1reb5a0{display:flex;flex-direction:row}.left-space.svelte-1reb5a0.svelte-1reb5a0,.right-space.svelte-1reb5a0.svelte-1reb5a0{width:150px}.right-space.svelte-1reb5a0.svelte-1reb5a0{align-self:flex-end}.tile.svelte-1reb5a0.svelte-1reb5a0{display:flex;background-color:white;border-radius:5px;margin-bottom:10px}.tile.svelte-1reb5a0>.svelte-1reb5a0{padding:10px}.left-informations.svelte-1reb5a0.svelte-1reb5a0{margin-right:50px}.statistics.svelte-1reb5a0.svelte-1reb5a0{width:230px;flex-direction:column;align-items:flex-end;gap:10px}.statistics.svelte-1reb5a0 .stat-info.svelte-1reb5a0{width:50%;display:flex;flex-direction:column;align-items:flex-end}.stat-text-1.svelte-1reb5a0.svelte-1reb5a0{font-size:18px}.stat-text-2.svelte-1reb5a0.svelte-1reb5a0{font-size:25px;display:flex;flex-direction:row;align-items:center}.stat-text-2.svelte-1reb5a0 img.svelte-1reb5a0{width:30px;margin-right:5px}",
  map: null
};
function formatNumber(number) {
  let formatedNumber = new Intl.NumberFormat("fr-CH", { maximumSignificantDigits: 3 }).format(number).replace("\u202F", "'");
  return formatedNumber;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { id = $page.params.id } = $$props;
  async function getInfos(precision = "") {
    let res;
    do {
      setTimeout(() => {
      });
      res = await fetch(`https://api.jikan.moe/v4/anime/${id + precision}`);
    } while (res == void 0);
    if (!res.ok || res.status === 404)
      return [];
    let json = await res.json();
    return json.data;
  }
  let infos = getInfos();
  let relations = getInfos("/relations");
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
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
            <div class="${"poster svelte-1reb5a0"}"><div class="${"poster-back"}"><div class="${"banner svelte-1reb5a0"}"><img${add_attribute("src", infos2.images.webp.large_image_url, 0)} alt="${escape(infos2.title, true) + "-banner.jpg"}" class="${"svelte-1reb5a0"}"></div>
                    <div class="${"anime-informations svelte-1reb5a0"}"><div class="${"anime-desc svelte-1reb5a0"}"><div class="${"anime-title svelte-1reb5a0"}">${escape(infos2.title)}</div>
                            genre
                            <div class="${"anime-synopsis svelte-1reb5a0"}">${escape(infos2.synopsis)}</div>
                            more...  background
                        </div>
                        <div class="${"anime-informations-menu"}">menu 
                        </div></div></div>

                <div class="${"poster-left-space"}"></div>
                <div class="${"overlap svelte-1reb5a0"}"><div class="${"overlap-informations svelte-1reb5a0"}"><div class="${"anime-thumbnail svelte-1reb5a0"}"><img${add_attribute("src", infos2.images.jpg.image_url, 0)} alt="${escape(infos2.title, true) + ".jpg"}" class="${"svelte-1reb5a0"}"></div></div>
                    <div class="${"overlap-buttons"}"><div>Add to list</div>
                        ${$page.data.user ? `${$page.data.post.exist ? `${validate_component(ActionButton, "ActionButton").$$render(
        $$result,
        {
          text: "Remove from list",
          action: "?/delList",
          color: "purple"
        },
        {},
        {}
      )}` : `${validate_component(ActionButton, "ActionButton").$$render(
        $$result,
        {
          text: "Add to list",
          action: "?/addList",
          color: "red"
        },
        {},
        {}
      )}`}` : ``}
                        <div>favorite</div></div></div>
                <div class="${"poster-right-space"}"></div></div>
            <div class="${"lower-wrap centered-content svelte-1reb5a0"}"><div class="${"left-space svelte-1reb5a0"}"></div>
                <div class="${"left-informations svelte-1reb5a0"}"><div class="${"statistics tile svelte-1reb5a0"}"><div class="${"score stat-info svelte-1reb5a0"}"><div class="${"score-text-1 stat-text-1 svelte-1reb5a0"}">score</div>
                            <div class="${"score-text-2 stat-text-2 svelte-1reb5a0"}"><img${add_attribute("src", star, 0)} alt="${"rank-star.svg"}" class="${"svelte-1reb5a0"}"> 
                                <div>${escape(infos2.score)}</div></div></div>
                        <div class="${"rank stat-info svelte-1reb5a0"}"><div class="${"rank-text-1 stat-text-1 svelte-1reb5a0"}">rank</div>
                            <div class="${"rank-text-2 stat-text-2 svelte-1reb5a0"}"><div>${escape(formatNumber(infos2.rank))}#</div></div></div>
                        <div class="${"popularity stat-info svelte-1reb5a0"}"><div class="${"popularity-text-1 stat-text-1 svelte-1reb5a0"}">popularity</div>
                            <div class="${"popularity-text-2 stat-text-2 svelte-1reb5a0"}"><div>${escape(formatNumber(infos2.popularity))}#</div></div></div>
                        <div class="${"members stat-info svelte-1reb5a0"}"><div class="${"members-text-1 stat-text-1 svelte-1reb5a0"}">members</div>
                            <div class="${"members-text-2 stat-text-2 svelte-1reb5a0"}"><div>${escape(formatNumber(infos2.members))}#</div></div></div></div>
                    <div class="${"external-link"}"></div></div>
                <div class="${"center-informations"}"><div class="${"anime-type-infos tile svelte-1reb5a0"}"><div class="${"svelte-1reb5a0"}">${escape(infos2.type)}</div>
                        <div class="${"svelte-1reb5a0"}"><div>${escape(infos2.status)}</div>
                            <div>${escape(infos2.season)} ${escape(infos2.year)}</div></div>
                        <div class="${"svelte-1reb5a0"}"><div>${escape(infos2.episodes)} episode(s) </div>
                            <div>${escape(infos2.duration)}</div></div></div>
                    <div class="${"tile svelte-1reb5a0"}"><div class="${"related-animes svelte-1reb5a0"}">${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return `
                            s
                                `;
        }
        return function(relations2) {
          return `
                                    ${each(relations2, (relation) => {
            return `<div class="${"relation-type"}">${escape(relation.relation)}</div>
                                        ${each(relation.entry, (related) => {
              return `${escape(related.name)} card`;
            })}`;
          })}
                                `;
        }(__value2);
      }(relations)}</div>
                        <div class="${"characters svelte-1reb5a0"}"></div></div>
                    <div class="${"tile svelte-1reb5a0"}"><div class="${"recommendations svelte-1reb5a0"}"></div>
                        <div class="${"staff svelte-1reb5a0"}"></div></div>

                    <div class="${"reviews tile svelte-1reb5a0"}"></div></div>
                <div class="${"right-space svelte-1reb5a0"}"></div></div>
        `;
    }(__value);
  }(infos)}
</main>`;
});
export {
  Page as default
};
