function chunkedArray(arr, size) {
  const chunked = [];
  for (let el of arr) {
    const lastEl = chunked[chunked.length - 1];
    if (!lastEl || lastEl.length === size) {
      chunked.push([el]);
    } else {
      lastEl.push(el);
    }
  }
  return chunked;
}

module.exports = chunkedArray;