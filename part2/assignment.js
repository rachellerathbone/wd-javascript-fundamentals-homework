// Define a function named sum that takes in one argument.
//    arr (array of numbers)
//
// Return the sum of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 10. If the array is empty, return 0.
function sum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

//console.log(sum([1, 2, 3, 4]));

// Define a function named product that takes in one argument.
//    arr (array of numbers)
//
// Return the product of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 24. If the array is empty, return 1.
function product(arr) {
  // YOUR CODE HERE
  var product = 1;

  for (var i = 1; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}

//console.log(product([1, 2, 3, 4]));

// Define a function named concatenate that takes in one argument.
//    arr (array of strings)
//
// Return the concatenation of all the strings in the array. For example, given
// ['hello', 'my', 'name', 'is', 'ken'], then return 'hellomynameisken'. If the
// array is empty, return ''.
function concatenate(arr) {
  return arr.join('');
}

//console.log(concatenate(['hello', 'my', 'name', 'is', 'ken']));

// Define a function named repeat that takes in two arguments.
//     str (string)
//     times (number)
//
// Return a new string containing times copies of the input str. For example,
// given 'hi' and 4, then return 'hihihihi'.
function repeat(str, times) {
     return str.repeat(times);
}

//console.log(repeat('hi', 4));

// Define a function named filterPassingGrades that takes in one argument.
//     grades (array of numbers)
//
// Return a new array with any grade less than 70 filtered out. For example,
// given [88, 67, 70, 92, 53], then return [88, 70, 92].
function filterPassingGrades(grades) {
  var passingGrades = [];
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] >= 70) {
      passingGrades.push(grades[i]);
    }
  }

  return passingGrades;

}

//console.log(filterPassingGrades([88, 67, 70, 92, 53]));


// Define a function named replace that takes in three arguments.
//    arr (array of numbers)
//    from (number)
//    to (number)
//
// Return a new array of numbers where all from elements are replaced with to.
// For example, given [1, 3, 2, 1, 3], 1, and 4, then return [4, 3, 2, 4, 3].
function replace(arr, from, to) {
  // loop through array to see if value 'from' exists
  var newArray = [];
  console.log(from);
  console.log(to);

  for (var i = 0; i < arr.length; i++) {
    // if from exists, replace from with to
    if (arr[i] === from) {
      newArray.push(arr[i] + to - from);
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

//console.log(replace([1, 3, 2, 1, 3], 1, 4));


// Define a function named flatten that takes in one argument.
//     arr (array of arrays)
//
// Return a new array that combines all of elements of each inner array. For
// example, given [[1], [2, 3], [4]], then return [1, 2, 3, 4].
//
// Tip: You only need to flatten one level deep.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
function flatten(arr) {
  var newArray = [].concat.apply([], arr);

  return newArray;
}

//console.log(flatten([[1], [2, 3], [4]]));


// Define a function named max that takes in one argument.
//    arr (array of numbers)
//
// Return the maximum number in the array. For example, given [1, 2, -3, 4],
// then return 4. If the array is empty, return -Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function max(arr) {
  return Math.max.apply(Math, arr);
}

//console.log(max([1, 20, -3, 4]));


// Define a function named min that takes in one argument.
//    arr (array of numbers)
//
// Return the minimum number in the array. For example, given [1, 2, -3, 4],
// then return -3. If the array is empty, return Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
function min(arr) {
  return Math.min.apply(Math, arr);
}

//console.log(min([1, 2, -3, 4]));



// Define a function named mean that takes in one argument.
//    arr (array of numbers)
//
// Return the mean (i.e. average) of all of the numbers in the array. For
// example, given [1, 2, 6], then return 3. If the array is empty, return null.
function mean(arr) {
  if (arr === null || typeof arr === 'undefined' || arr.length === 0) {
    return null;
  }

  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr.length > 0) {
      sum += arr[i];
    }
  }

    return sum / arr.length;

}
//console.log(mean([]));


// Define a function named median that takes in one argument.
//    arr (array of numbers)
//
// Return the median of all of the numbers. For example, given [1, 2, 6], then
// return 2. Also, if given [1, 2, 6, 8], return 4. If the array is empty,
// return null.
//
// Tip: Use Google to learn more about calculating the median.
// Tip: The given array may not be sorted.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function median (arr) {
  // sort items in array
  var sortedArray = arr.sort();
  // divide array in half and round down.
  // Rounding down will allow us to return the array at the correct index.
  // for example, if the array length is 5, half of 5 is 2.5, rounded down we get 2.
  // the index of [2] would be the middle index.
  var half = Math.floor(arr.length / 2);

    if (arr === null || typeof arr === 'undefined' || arr.length === 0) {
    return null;
    }
    // if the array divided by 2 returns no remainder,
    // return the array at the half way point
    if (arr.length % 2) {
      return arr[half];
      // otherwise, if the array has an even number of elements,
      // add the element left of center, and the element right of center,
      // divide by 2 and return.
    } else {
      return ((arr[half - 1] + arr[half]) / 2 );
    }
}

//console.log(median([1, 2, 3, 4]));


// Define a function named contains that takes in two arguments.
//     arr (array of strings)
//     str (string)
//
// Return true if that string exists in the array, otherwise false.
function contains(arr, str) {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return true;
    }
  }
  return false;
}

//console.log(contains(['cat', 'dog', 'bear'], 'bears'));


// Define a function named distance that takes in two arguments.
//    point1 (object)
//    point2 (object)
//
// Assume each point argument has the following format.
//    { x: NUMBER, y: NUMBER }
//
// Return the distance between the two points on a Cartesian coordinate system.
// For example, given { x: 3, y: 2 } and { x: 9, y: 7 }, then return
// approximately 7.810249675906654.
//
// Tip: Use Google to learn more about calculating the distance.
function distance(point1, point2) {
    var calculateDistance = Math.sqrt( (point2.x -= point1.x) * point2.x + (point2.y -= point1.y) * point2.y );

    return calculateDistance;
}

//console.log(distance({ x: 3, y: 2}, { x: 9, y: 7}));


// Define a function named combine that takes in two arguments.
//    obj1 (object)
//    obj2 (object)
//
// Return a new object that has the key-value pairs of both objects. For
// example, given { a: 1 } and { b: 2 }, then return { a: 1, b: 2 }.
// If there's a key in more than one object,
// the latest object to have the key will determine the value. For example,
// given {c: 3} and {c: 4}, then return {c: 4}.
function combine(obj1, obj2) {
    var newObject = Object.assign(obj1, obj2);
    return newObject;
}

//console.log(combine({b: 1}, {b: 2}));

// Define a function called invert that takes in one argument.
//    obj (object)
//
// Return a new object where the keys and values of the argument are inverted.
// For example, given { a: 1, b: 2 }, then return { '1': 'a', '2': 'b' }.
function invert(obj) {
  var invertKeyValuePairs = {};

  // look for keys in the obj object
  for (var key in obj) {
    invertKeyValuePairs[obj[key]] = key;
  }
  return invertKeyValuePairs;
}

//console.log(invert({a: 1, b: 2}));


// Define a function named values that takes in one argument.
//    obj (object)
//
// Return an array of the values of the object. For example, given
// { a: 1, b: 2, c: 3 }, then return [1, 2, 3].
function values(obj) {
  var newArray = [];
  // test if the object is an array and, if not, return
  // otherwise, loop through items in array
  // loop through properties of obj using object collection iteration
  for (var property in obj) {
    // loop through properties of objects to check typeof
    newArray.push(obj[property]);
  }
  return newArray;
}

//console.log(values({ a: 1, b: 2, c: 3}));

// Define a function called toPairs that takes in one argument.
//    obj (object)
//
// Return a new array where each element is key-value pair array of the
// argument. For example, given { a: 1, b: 2 }, then return
// [['a', 1], ['b', 2]].
function toPairs(obj) {
  var newArray = [];
  for (var property in obj) {
    // loop through properties of objects to check typeof
    var innerArray = [];
    innerArray.push(property);
    innerArray.push(obj[property]);

    newArray.push(innerArray);
  }
  return newArray;
}

//console.log(toPairs({ a: 1, b: 2 }));

// Define a function called fromPairs that takes in one argument.
//    arr (array)
//
// Return a new object where each key-value pair is from an element in the
// argument. For example, given [['a', 1], ['b', 2]], then return
// { a: 1, b: 2 }.
function fromPairs(arr) {
  var newObject = {};
  for (var i = 0; i < arr.length; i++) {
    //console.log(arr);
    newObject[arr[i][0]] = arr[i][1];
  }
  return newObject;
}

console.log(fromPairs([['a', 1], ['b', 2]]));
