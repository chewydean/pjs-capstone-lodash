const _ = {
  
  clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
  },
  
  inRange(number, num1, num2) {
    let start = 0;
    let end = 0;
    if (!num2) {
      end = num1;
    }
    else {
      end = num2;
      start = num1;
    }
    if (num1 > num2) {
        start = num2;
        end = num1;
    }
    if (number < start || number >= end) {
      return false;
    }
    return true;
  },
  
  words(string) {
    return string.split(' ');
  },
  
  pad(string, length) {
    if (string.length >= length) {
      return string;
    }
    let diff = length - string.length;
    return ' '.repeat(Math.floor(diff / 2)) + string + ' '.repeat(diff - Math.floor(diff / 2));
  },
  
  has(obj, key) {
    if (!obj[key]) {
        return false;
    }
    return true;
  },
  
  invert(obj) {
   let obj2 = {};
    for (let key in obj) {
      obj2[obj[key]] = key;
    }
    return obj2;
  },
  
  findKey(obj,predicate) {
    for (let key in obj) {
      if (predicate(obj[key])) {
        return key;
      }
    }
    return undefined;
  },
  
  drop(arr, num) {
    if (!num) {
      num = 1;
    }
    return arr.splice(num);
  },
  
	dropWhile(arr, predicate) {
    let dropNumber = arr.findIndex((element, index) => {!predicate(element, index, arr)}) - 1;
    return this.drop(arr, dropNumber);
  },
  
  chunk(arr, size) {
    if (!size) {
      size = 1;
    }
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
      let arrayChunk = arr.slice(i, i + size);
      result.push(arrayChunk);
    }
    return result;
  }
}

// Do not write or modify code below this line.
module.exports = _;
