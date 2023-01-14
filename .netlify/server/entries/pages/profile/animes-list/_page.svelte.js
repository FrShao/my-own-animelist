import { c as create_ssr_component, r as createEventDispatcher, e as escape, A as null_to_empty, o as add_attribute, z as each, v as validate_component, b as subscribe, y as is_promise, n as noop } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
function coordinate2position(coordinate, cellSize, gap) {
  return coordinate * cellSize + (coordinate + 1) * gap;
}
function coordinate2size(coordinate, cellSize, gap) {
  return coordinate * cellSize + (coordinate - 1) * gap;
}
function calcPosition(item2, options) {
  const { itemSize, gap } = options;
  return {
    left: coordinate2position(item2.x, itemSize.width, gap),
    top: coordinate2position(item2.y, itemSize.height, gap),
    width: coordinate2size(item2.w, itemSize.width, gap),
    height: coordinate2size(item2.h, itemSize.height, gap)
  };
}
function getGridDimensions(items) {
  const cols = Math.max(...items.map((item2) => item2.x + item2.w), 1);
  const rows = Math.max(...items.map((item2) => item2.y + item2.h), 1);
  return { cols, rows };
}
const GridItem_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".item-default.svelte-1ul6fc6{transition:width 0.2s, height 0.2s;transition:transform 0.2s, opacity 0.2s}.active-default.svelte-1ul6fc6{opacity:0.7}.item-preview-default.svelte-1ul6fc6{background-color:rgb(192, 127, 127);transition:all 0.2s}",
  map: null
};
const GridItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { item: item2 } = $$props;
  let { gridParams } = $$props;
  let { class: classes = void 0 } = $$props;
  let { activeClass = void 0 } = $$props;
  let { previewClass = void 0 } = $$props;
  let { resizerClass = "resizer-default" } = $$props;
  let active = false;
  let left;
  let top;
  let width;
  let height;
  let previewItem = item2;
  const movable = !gridParams.readOnly && item2.movable === void 0 && item2.movable !== false;
  !gridParams.readOnly && item2.resizable === void 0 && item2.resizable !== false;
  if ($$props.item === void 0 && $$bindings.item && item2 !== void 0)
    $$bindings.item(item2);
  if ($$props.gridParams === void 0 && $$bindings.gridParams && gridParams !== void 0)
    $$bindings.gridParams(gridParams);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.previewClass === void 0 && $$bindings.previewClass && previewClass !== void 0)
    $$bindings.previewClass(previewClass);
  if ($$props.resizerClass === void 0 && $$bindings.resizerClass && resizerClass !== void 0)
    $$bindings.resizerClass(resizerClass);
  $$result.css.add(css$2);
  {
    {
      const newPosition = calcPosition(item2, {
        itemSize: gridParams.itemSize,
        gap: gridParams.gap
      });
      left = newPosition.left;
      top = newPosition.top;
      width = newPosition.width;
      height = newPosition.height;
    }
  }
  {
    {
      const minSize = item2.min ?? { w: 1, h: 1 };
      ({
        width: coordinate2size(minSize.w, gridParams.itemSize.width, gridParams.gap),
        height: coordinate2size(minSize.h, gridParams.itemSize.height, gridParams.gap)
      });
    }
  }
  {
    if (item2.max) {
      ({
        width: coordinate2size(item2.max.w, gridParams.itemSize.width, gridParams.gap),
        height: coordinate2size(item2.max.h, gridParams.itemSize.height, gridParams.gap)
      });
    }
  }
  {
    dispatch("previewchange", { item: previewItem });
  }
  return `<div class="${[
    escape(null_to_empty(`${classes} ${""}`), true) + " svelte-1ul6fc6",
    (!classes ? "item-default" : "") + " " + (!activeClass && active ? "active-default" : "")
  ].join(" ").trim()}"${add_attribute(
    "style",
    `position: absolute; left:${left}px; top:${top}px; width: ${width}px; height: ${height}px; 
			${movable ? "cursor: move;" : ""} touch-action: none; user-select: none;`,
    0
  )}>${slots.default ? slots.default({}) : ``}</div>

${``}`;
});
function assertGridOptions(options) {
  const { cols, rows, itemSize } = options;
  if (cols === 0 && (itemSize == null ? void 0 : itemSize.width) === void 0 || typeof cols === "object" && Object.values(cols).includes(0) && (itemSize == null ? void 0 : itemSize.width) === void 0) {
    throw new Error("If `cols` === `0`, the `itemSize.width` parameter must be specified");
  }
  if (rows === 0 && (itemSize == null ? void 0 : itemSize.height) === void 0 || typeof rows === "object" && Object.values(rows).includes(0) && (itemSize == null ? void 0 : itemSize.height) === void 0) {
    throw new Error("If `rows` === `0`, the `itemSize.height` parameter must be specified");
  }
  if (cols < 0) {
    throw new Error("`cols` must be greater than or equal to `0`");
  }
  if (rows < 0) {
    throw new Error("`rows` must be greater than or equal to `0`");
  }
}
const Grid_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-grid-extended.svelte-1jq98wt{position:relative !important}.svelte-grid-extended .resizer-default{touch-action:none;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:20px;height:20px;right:0;bottom:0;cursor:se-resize}.svelte-grid-extended .resizer-default::after{content:'';position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0, 0, 0, 0.4);border-bottom:2px solid rgba(0, 0, 0, 0.4)}",
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cols = 0 } = $$props;
  let { rows = 0 } = $$props;
  let { itemSize = {} } = $$props;
  let { gap = 10 } = $$props;
  let { items } = $$props;
  let { breakpoints = {
    xxl: 1536,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
    xs: 320
  } } = $$props;
  assertGridOptions({ cols, rows, itemSize });
  let { bounds = false } = $$props;
  let { readOnly = false } = $$props;
  let { debug = false } = $$props;
  let { class: classes = "" } = $$props;
  let { itemClass = void 0 } = $$props;
  let { itemActiveClass = void 0 } = $$props;
  let { itemPreviewClass = void 0 } = $$props;
  let { itemResizerClass = "resizer-default" } = $$props;
  let _itemSize;
  let _cols;
  let _rows;
  let maxCols;
  let maxRows;
  let containerWidth;
  let containerHeight;
  let gridContainer;
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0)
    $$bindings.cols(cols);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.itemSize === void 0 && $$bindings.itemSize && itemSize !== void 0)
    $$bindings.itemSize(itemSize);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.breakpoints === void 0 && $$bindings.breakpoints && breakpoints !== void 0)
    $$bindings.breakpoints(breakpoints);
  if ($$props.bounds === void 0 && $$bindings.bounds && bounds !== void 0)
    $$bindings.bounds(bounds);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0)
    $$bindings.debug(debug);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  if ($$props.itemClass === void 0 && $$bindings.itemClass && itemClass !== void 0)
    $$bindings.itemClass(itemClass);
  if ($$props.itemActiveClass === void 0 && $$bindings.itemActiveClass && itemActiveClass !== void 0)
    $$bindings.itemActiveClass(itemActiveClass);
  if ($$props.itemPreviewClass === void 0 && $$bindings.itemPreviewClass && itemPreviewClass !== void 0)
    $$bindings.itemPreviewClass(itemPreviewClass);
  if ($$props.itemResizerClass === void 0 && $$bindings.itemResizerClass && itemResizerClass !== void 0)
    $$bindings.itemResizerClass(itemResizerClass);
  $$result.css.add(css$1);
  {
    if (typeof cols === "number")
      _cols = cols;
  }
  {
    if (typeof rows === "number")
      _rows = rows;
  }
  {
    if ((itemSize == null ? void 0 : itemSize.width) && (itemSize == null ? void 0 : itemSize.height))
      _itemSize = { ...itemSize };
  }
  getGridDimensions(items);
  {
    {
      _cols = _cols;
      maxCols = _cols;
    }
  }
  {
    if ((itemSize == null ? void 0 : itemSize.width) && (_itemSize == null ? void 0 : _itemSize.width))
      containerWidth = _cols * (_itemSize.width + gap + 1);
  }
  {
    {
      _rows = _rows;
      maxRows = _rows;
    }
  }
  {
    if ((itemSize == null ? void 0 : itemSize.height) && (_itemSize == null ? void 0 : _itemSize.height))
      containerHeight = _rows * (_itemSize.height + gap + 1);
  }
  return `<div class="${escape(null_to_empty(`svelte-grid-extended ${classes}`), true) + " svelte-1jq98wt"}"${add_attribute(
    "style",
    `width: ${containerWidth ? `${containerWidth}px` : "100%"}; 
		height: ${containerHeight ? `${containerHeight}px` : "100%"};`,
    0
  )}${add_attribute("this", gridContainer, 0)}>${_itemSize && _cols && _rows ? `${each(items, (item2) => {
    return `${validate_component(GridItem, "GridItem").$$render(
      $$result,
      {
        class: itemClass ?? "",
        item: item2,
        gridParams: {
          itemSize: _itemSize,
          gap,
          maxCols,
          maxRows,
          bounds,
          items,
          readOnly
        },
        activeClass: itemActiveClass,
        previewClass: itemPreviewClass,
        resizerClass: itemResizerClass
      },
      {},
      {
        default: () => {
          return `${slots.default ? slots.default({ item: item2 }) : ``}
			`;
        }
      }
    )}`;
  })}` : `${slots.loader ? slots.loader({ item }) : `
			${debug ? `${escape(_itemSize)} ${escape(_cols)} ${escape(_rows)}` : ``}
		`}`}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-container{display:block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let animes = $page.data.post.animes;
  let items = Array.from(animes);
  items.forEach((anime, index) => {
    anime.id = index;
    anime.x = 0;
    anime.y = index;
    anime.w = 1;
    anime.h = 2;
    items.push(anime);
  });
  const itemSize = { width: 100, height: 400 };
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<main><h1>Liste de ${escape($page.data.user.name)}</h1>
    ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        wait
    `;
    }
    return function(animes2) {
      return `
    ${validate_component(Grid, "Grid").$$render(
        $$result,
        {
          itemSize,
          cols: 0,
          rows: 0,
          class: "grid-container",
          items,
          readOnly: true
        },
        {},
        {
          default: ({ item: item2 }) => {
            return `<div class="${"grid-item"}"><div class="${"wrap"}"><img${add_attribute("src", item2.images.jpg.image_url, 0)}${add_attribute("alt", item2.title, 0)}></div>
            <form method="${"post"}">
                <input name="${"anime-id"}" type="${"hidden"}"${add_attribute("value", item2.mal_id, 0)}>
                <button formaction="${"?/delList"}">
                    <span>Supprimer de la liste</span></button></form></div>`;
          }
        }
      )}
            
        
        =&gt; animes
        list favorite
        list anime
    `;
    }();
  }(animes)}
</main>`;
});
export {
  Page as default
};
