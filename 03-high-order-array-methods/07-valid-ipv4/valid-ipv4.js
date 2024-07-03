const isValidIPv4 = (ip) => {
  const octets = ip.split('.');
  if (octets.length !== 4) {
    return false
  }
  return octets.every(item => {
    let octet = parseInt(item);
    return octet >= 0 && octet <= 255 && octet.toString();
  })
};


const result1 = isValidIPv4('122.164.23.21');
const result2 = isValidIPv4('122.164.23.21.33');

console.log(result1, result2);
module.exports = isValidIPv4;
