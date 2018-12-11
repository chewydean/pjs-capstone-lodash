const _ = {
  clamp(number, min, max) {
    let x = Math.max(number, min);
    let y = Math.min(x, max);
    return y;
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
    if (num1 > num2)
      {
        start = num2;
        end = num1;
      }
    if (number < start) {
      return false;
    }
    if (number > end) {
      return false;
    }
    return true;
    },
  words(string) {
    let arr = string.split(' ');
    return arr;
  },
  pad(string, length) {
    if (string.length >= length) {
      return string;
    }
    let diff = length - string.length;
    let x = Math.floor(diff / 2);
    let y = diff - x;
		let paddedString = ' '.repeat(x) + string + ' '.repeat(y)
    return paddedString;
  },
  has(obj, key) {
    if (!obj[key])
      {
        return false;
      }
    return true;
  },
  invert(obj) {
    obj2 = {};
    for (let key in obj) {
      let originalValue = obj[key];
      obj2[originalValue] = key;
    }
    return obj2;
  },
  findKey(obj,predicate) {
    for (let key in obj) {
      let value = obj[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },
  drop(arr, num) {
    if (!num) {
      num = 1;
    }
    let arr2 = arr.splice(num);
    return arr2;
  },
	dropWhile(arr, predicate) {
    let dropNumber = arr.findIndex((element, index) => {!predicate(element, index, arr)}) - 1;
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
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