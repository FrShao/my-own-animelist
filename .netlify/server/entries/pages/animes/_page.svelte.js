import { c as create_ssr_component, o as add_attribute, e as escape, y as is_promise, n as noop, z as each, v as validate_component } from "../../../chunks/index.js";
const PUBLIC_CARD_WIDTH = "225px";
const PUBLIC_CARD_HEIGHT = "308px";
const Card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card.svelte-1rgh8b7.svelte-1rgh8b7{font-family:'Roboto', sans-serif;display:flex;flex-direction:column;width:var(--cardWidth);height:fit-content}.card.svelte-1rgh8b7 a.svelte-1rgh8b7{text-decoration:none}.card-thumbnail.svelte-1rgh8b7.svelte-1rgh8b7{position:relative;border-radius:5px;width:var(--cardWidth);height:var(--cardHeight)}.card-desc.svelte-1rgh8b7.svelte-1rgh8b7{bottom:10px;color:rgb(116,136,153);font-weight:600;font-size:16px;height:50px}",
  map: null
};
function checkNameLength(name) {
  let string;
  const maxChar = 40;
  if (name.length > maxChar) {
    let counter = 0;
    let splittedName = name.split(" ");
    string = "";
    splittedName.forEach((word) => {
      counter += word.length + 1;
      if (counter <= maxChar + 1) {
        string += word + " ";
      }
    });
    string += "...";
  } else {
    string = name;
  }
  return string;
}
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cardUrl = "/" } = $$props;
  let { cardImg = "" } = $$props;
  let { cardName = "N/A" } = $$props;
  if ($$props.cardUrl === void 0 && $$bindings.cardUrl && cardUrl !== void 0)
    $$bindings.cardUrl(cardUrl);
  if ($$props.cardImg === void 0 && $$bindings.cardImg && cardImg !== void 0)
    $$bindings.cardImg(cardImg);
  if ($$props.cardName === void 0 && $$bindings.cardName && cardName !== void 0)
    $$bindings.cardName(cardName);
  $$result.css.add(css$1);
  return `<div class="${"card svelte-1rgh8b7"}"><a${add_attribute("href", cardUrl, 0)} class="${"svelte-1rgh8b7"}">
        <div class="${"card-thumbnail svelte-1rgh8b7"}" style="${"background-image: url(" + escape(cardImg, true) + "); width: " + escape(PUBLIC_CARD_WIDTH, true) + "; height: " + escape(PUBLIC_CARD_HEIGHT, true) + ";"}"></div>
        <div class="${"card-desc svelte-1rgh8b7"}">${escape(checkNameLength(cardName))}</div></a>
</div>`;
});
const SeasonAnime_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrap.svelte-h6bj7h{display:flex;flex-direction:row;gap:10px;flex-wrap:wrap}.nowrap.svelte-h6bj7h{flex-wrap:nowrap}",
  map: null
};
const SeasonAnime = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { extraInformations = ["now", ""] } = $$props;
  let year = extraInformations[0];
  let season = extraInformations[1];
  let { limit = 25 } = $$props;
  let { isSmall = false } = $$props;
  let { isNoWrap = false } = $$props;
  let { cardWidth = 225 } = $$props;
  let { page = 1 } = $$props;
  if (isSmall) {
    cardWidth = 131;
  }
  function cutAtLimit(json) {
    let newJson;
    if (limit == 0) {
      newJson = json;
    } else {
      newJson = [json[0]];
      for (let i = 1; i < limit; i++) {
        newJson.push(json[i]);
      }
    }
    return newJson;
  }
  async function getInfos(nopage = 1) {
    let dynamicPart;
    if (season == "") {
      dynamicPart = `${year}?page=${nopage}`;
    } else {
      dynamicPart = `${year}/${season}?page=${nopage}`;
    }
    let path = `https://api.jikan.moe/v4/seasons/${dynamicPart}`;
    let res = await fetch(path);
    if (!res.ok || res.status === 404)
      return [];
    let json = await res.json();
    if (limit == 0 && nopage < json.pagination.last_visible_page) {
      let tmpJson = await getInfos(nopage + 1);
      json.data = json.data.concat(tmpJson);
    }
    return json.data;
  }
  let infos = getInfos(page);
  if ($$props.extraInformations === void 0 && $$bindings.extraInformations && extraInformations !== void 0)
    $$bindings.extraInformations(extraInformations);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.isSmall === void 0 && $$bindings.isSmall && isSmall !== void 0)
    $$bindings.isSmall(isSmall);
  if ($$props.isNoWrap === void 0 && $$bindings.isNoWrap && isNoWrap !== void 0)
    $$bindings.isNoWrap(isNoWrap);
  if ($$props.cardWidth === void 0 && $$bindings.cardWidth && cardWidth !== void 0)
    $$bindings.cardWidth(cardWidth);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css);
  return `<section><div class="${"wrap " + escape(isNoWrap ? "nowrap" : "", true) + " svelte-h6bj7h"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
            <div>Waiting for informations ...</div>
            `;
    }
    return function(infos2) {
      return `
                ${each(cutAtLimit(infos2), (anime) => {
        return `${validate_component(Card, "Card").$$render(
          $$result,
          {
            cardUrl: "/animes/" + anime.mal_id,
            cardImg: anime.images.jpg.image_url,
            cardName: anime.title
          },
          {},
          {}
        )}`;
      })}
            `;
    }(__value);
  }(infos)}</div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"centered-content"}">${validate_component(SeasonAnime, "SeasonAnime").$$render($$result, { limit: 0 }, {}, {})}</main>`;
});
export {
  Page as default
};
