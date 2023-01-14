import { c as create_ssr_component, e as escape, v as validate_component, m as missing_component } from "../../chunks/index.js";
var IdCounter = 0;
function nextId() {
  return ++IdCounter;
}
var global = /* @__PURE__ */ Function("return this")();
if (typeof global.__nextId !== "function") {
  global.__nextId = nextId;
}
const ScrollList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".cover.svelte-1db38yo.svelte-1db38yo{position:relative;overflow:hidden}.fit-element.svelte-1db38yo.svelte-1db38yo{width:var(--elementWidth)}.left.svelte-1db38yo.svelte-1db38yo{background-position:right;height:var(--buttonHeight);width:var(--buttonWidth);position:absolute;left:0;top:50%;transform:translateY(-50%)}.right.svelte-1db38yo.svelte-1db38yo,.left.svelte-1db38yo.svelte-1db38yo{height:var(--buttonHeight);width:var(--buttonWidth);position:absolute;top:50%;transition-duration:0.5s}.left.svelte-1db38yo.svelte-1db38yo{background-position:right;left:0;transform:translate(var(--buttonWidthMinus), -50%)\r\n    }.right.svelte-1db38yo.svelte-1db38yo{background-position:left;right:0;transform:translate(var(--buttonWidth), -50%)}button.svelte-1db38yo.svelte-1db38yo{background-image:url(https://cdn.myanimelist.net/images/btn_handle.png?v=1634263200);background-repeat:no-repeat;background-size:80px auto;background-color:transparent;border:none;outline:none;cursor:pointer}.scroll-images.svelte-1db38yo.svelte-1db38yo{width:100%;height:auto;display:flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;flex-direction:row}.scroll-images.svelte-1db38yo.svelte-1db38yo::-webkit-scrollbar{display:none}.cover.svelte-1db38yo:hover .right.svelte-1db38yo,.cover.svelte-1db38yo:hover .left.svelte-1db38yo{transition-duration:0.5s;transform:translate(0, -50%)}",
  map: null
};
const ScrollList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let uniqId;
  let { lib } = $$props;
  let { extraInformations = void 0 } = $$props;
  let { isFittingSingleElement = false } = $$props;
  if ($$props.lib === void 0 && $$bindings.lib && lib !== void 0)
    $$bindings.lib(lib);
  if ($$props.extraInformations === void 0 && $$bindings.extraInformations && extraInformations !== void 0)
    $$bindings.extraInformations(extraInformations);
  if ($$props.isFittingSingleElement === void 0 && $$bindings.isFittingSingleElement && isFittingSingleElement !== void 0)
    $$bindings.isFittingSingleElement(isFittingSingleElement);
  $$result.css.add(css);
  return `<section><div class="${["cover svelte-1db38yo", isFittingSingleElement ? "fit-element" : ""].join(" ").trim()}"><div class="${"scroll-images-" + escape(lib, true) + "-" + escape(uniqId, true) + " scroll-images svelte-1db38yo"}">${extraInformations == void 0 ? `${validate_component(missing_component, "svelte:component").$$render($$result, { isNoWrap: true }, {}, {})}` : `${validate_component(missing_component, "svelte:component").$$render($$result, { isNoWrap: "true", extraInformations }, {}, {})}`}</div>

        <button class="${"left svelte-1db38yo"}"><i class="${"fas fa-angle-double-left"}"></i></button>
        <button class="${"right svelte-1db38yo"}" ${""}><i class="${"fas fa-angle-double-right"}"></i></button></div>
</section>`;
});
const SingleScrollList_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"centered-content"}">search bar avec filter<br>

    saison anime
    ${validate_component(ScrollList, "ScrollList").$$render($$result, { lib: "SeasonAnime" }, {}, {})}
    next season
    ${validate_component(ScrollList, "ScrollList").$$render(
    $$result,
    {
      lib: "SeasonAnime",
      extraInformations: ["upcoming", ""]
    },
    {},
    {}
  )}
    top
    
    RECO
    
    </main>`;
});
export {
  Page as default
};
