const assert = require('assert');
const chunkedArray = require('./chunked-array');

describe('Chunked Array', () => {
  it('should create chunks of a specific size', () => {
    assert.deepEqual(chunkedArray([1,2,3,4], 2), [[1,2], [3,4]]);
    assert.deepEqual(chunkedArray([1,2,3,4], 3), [[1,2,3], [4]]);
  })
})