function arrayIntersection(arr1, arr2) {
  const arrayInt = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !arrayInt.includes(arr1[i])) {
      arrayInt.push(arr1[i])
    }
  }
}
function arrayIntersection2(arr1, arr2) {
  let set1 = new Set(arr1);
  console.log(set1)
  let newAr = [];
  for (let num of arr2) {
    if(set1.has(num)) {
      newAr.push(num)
    }
  }
}

const result = arrayIntersection2([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

console.log(result);

module.exports = arrayIntersection;
