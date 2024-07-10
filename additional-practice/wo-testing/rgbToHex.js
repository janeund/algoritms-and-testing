function rgb(r, g, b) {
  return  '' + itemToHex(r) + itemToHex(g) + itemToHex(b)
}

function itemToHex(num) { 
  if (num < 0) {
    num = 0;
  } else if (num > 255) {
    num = 255
  }
  num = num.toString(16);
  if (num.length === 1) {
    num = '0' + num
  }
  return num;
}



console.log(rgb(10, 255, 255))

