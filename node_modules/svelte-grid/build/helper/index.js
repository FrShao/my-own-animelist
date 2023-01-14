(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.gridHelper = factory());
}(this, (function () { 'use strict';

  function getRowsCount(items, cols) {
    const getItemsMaxHeight = items.map((val) => {
      const item = val[cols];

      return (item && item.y) + (item && item.h) || 0;
    });

    return Math.max(...getItemsMaxHeight, 1);
  }

  const makeMatrix = (rows, cols) => Array.from(Array(rows), () => new Array(cols)); // make 2d array

  function makeMatrixFromItems(items, _row, _col) {
    let matrix = makeMatrix(_row, _col);

    for (var i = 0; i < items.length; i++) {
      const value = items[i][_col];
      if (value) {
        const { x, y, h } = value;
        const id = items[i].id;
        const w = Math.min(_col, value.w);

        for (var j = y; j < y + h; j++) {
          const row = matrix[j];
          for (var k = x; k < x + w; k++) {
            row[k] = { ...value, id };
          }
        }
      }
    }
    return matrix;
  }

  function findCloseBlocks(items, matrix, curObject) {
    const { h, x, y } = curObject;

    const w = Math.min(matrix[0].length, curObject.w);
    const tempR = matrix.slice(y, y + h);

    let result = [];
    for (var i = 0; i < tempR.length; i++) {
      let tempA = tempR[i].slice(x, x + w);
      result = [...result, ...tempA.map((val) => val.id && val.id !== curObject.id && val.id).filter(Boolean)];
    }

    return [...new Set(result)];
  }

  function makeMatrixFromItemsIgnore(items, ignoreList, _row, _col) {
    let matrix = makeMatrix(_row, _col);
    for (var i = 0; i < items.length; i++) {
      const value = items[i][_col];
      const id = items[i].id;
      const { x, y, h } = value;
      const w = Math.min(_col, value.w);

      if (ignoreList.indexOf(id) === -1) {
        for (var j = y; j < y + h; j++) {
          const row = matrix[j];
          if (row) {
            for (var k = x; k < x + w; k++) {
              row[k] = { ...value, id };
            }
          }
        }
      }
    }
    return matrix;
  }

  function findItemsById(closeBlocks, items) {
    return items.filter((value) => closeBlocks.indexOf(value.id) !== -1);
  }

  function findFreeSpaceForItem(matrix, item) {
    const cols = matrix[0].length;
    const w = Math.min(cols, item.w);
    let xNtime = cols - w;
    let getMatrixRows = matrix.length;

    for (var i = 0; i < getMatrixRows; i++) {
      const row = matrix[i];
      for (var j = 0; j < xNtime + 1; j++) {
        const sliceA = row.slice(j, j + w);
        const empty = sliceA.every((val) => val === undefined);
        if (empty) {
          const isEmpty = matrix.slice(i, i + item.h).every((a) => a.slice(j, j + w).every((n) => n === undefined));

          if (isEmpty) {
            return { y: i, x: j };
          }
        }
      }
    }

    return {
      y: getMatrixRows,
      x: 0,
    };
  }

  const getItem = (item, col) => {
    return { ...item[col], id: item.id };
  };

  const updateItem = (elements, active, position, col) => {
    return elements.map((value) => {
      if (value.id === active.id) {
        return { ...value, [col]: { ...value[col], ...position } };
      }
      return value;
    });
  };

  function moveItem(active, items, cols, original) {
    // Get current item from the breakpoint
    const item = getItem(active, cols);

    // Create matrix from the items expect the active
    let matrix = makeMatrixFromItemsIgnore(items, [item.id], getRowsCount(items, cols), cols);
    // Getting the ids of items under active Array<String>
    const closeBlocks = findCloseBlocks(items, matrix, item);
    // Getting the objects of items under active Array<Object>
    let closeObj = findItemsById(closeBlocks, items);
    // Getting whenever of these items is fixed
    const fixed = closeObj.find((value) => value[cols].fixed);

    // If found fixed, reset the active to its original position
    if (fixed) return items;

    // Update items
    items = updateItem(items, active, item, cols);

    // Create matrix of items expect close elements
    matrix = makeMatrixFromItemsIgnore(items, closeBlocks, getRowsCount(items, cols), cols);

    // Create temp vars
    let tempItems = items;
    let tempCloseBlocks = closeBlocks;

    // Exclude resolved elements ids in array
    let exclude = [];

    // Iterate over close elements under active item
    closeObj.forEach((item) => {
      // Find position for element
      let position = findFreeSpaceForItem(matrix, item[cols]);
      // Exclude item
      exclude.push(item.id);

      // Assign the position to the element in the column
      tempItems = updateItem(tempItems, item, position, cols);

      // Recreate ids of elements
      let getIgnoreItems = tempCloseBlocks.filter((value) => exclude.indexOf(value) === -1);

      // Update matrix for next iteration
      matrix = makeMatrixFromItemsIgnore(tempItems, getIgnoreItems, getRowsCount(tempItems, cols), cols);
    });

    // Return result
    return tempItems;
  }

  // Helper function
  function normalize(items, col) {
    let result = items.slice();

    result.forEach((value) => {
      const getItem = value[col];
      if (!getItem.static) {
        result = moveItem(getItem, result, col);
      }
    });

    return result;
  }

  // Helper function
  function adjust(items, col) {
    let matrix = makeMatrix(getRowsCount(items, col), col);

    let res = [];

    items.forEach((item) => {
      let position = findFreeSpaceForItem(matrix, item[col]);

      res.push({
        ...item,
        [col]: {
          ...item[col],
          ...position,
        },
      });

      matrix = makeMatrixFromItems(res, getRowsCount(res, col), col);
    });

    return res;
  }

  function makeItem(item) {
    const { min = { w: 1, h: 1 }, max } = item;
    return {
      fixed: false,
      resizable: !item.fixed,
      draggable: !item.fixed,
      customDragger: false,
      customResizer: false,
      min: {
        w: Math.max(1, min.w),
        h: Math.max(1, min.h),
      },
      max: { ...max },
      ...item,
    };
  }

  const gridHelp = {
    normalize(items, col) {
      getRowsCount(items, col);
      return normalize(items, col);
    },

    adjust(items, col) {
      return adjust(items, col);
    },

    item(obj) {
      return makeItem(obj);
    },

    findSpace(item, items, cols) {
      let matrix = makeMatrixFromItems(items, getRowsCount(items, cols), cols);

      let position = findFreeSpaceForItem(matrix, item[cols]);
      return position;
    },
  };

  return gridHelp;

})));
