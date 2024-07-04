function phoneNumberDirectory(arr) {
  const directory = new Map();
  for (const entry of arr) {
   const [name, phoneNumber] = entry.split(':');
   directory.set(name, phoneNumber)
  }
  return phoneMap
}

module.exports = phoneNumberDirectory;
