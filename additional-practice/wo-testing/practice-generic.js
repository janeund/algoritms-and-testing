function reverseStr(str) {
  let startIdx = 0;
  let endIdx = str.length - 1;
  let strArr = str.split('');

  while (startIdx < endIdx) {
    const temp = strArr[startIdx];
    strArr[startIdx] = strArr[endIdx];
    strArr[endIdx] = temp;
    startIdx++;
    endIdx--;
  }
  return strArr.join('')
}

console.log(reverseStr('hello'));