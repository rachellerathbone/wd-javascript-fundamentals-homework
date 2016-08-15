// Define a function named sum that takes two arguments
//    a (number)
//    b (number)
//
// Return the sum of these two arguments
function sum(a, b) {
  return a + b;
}

//console.log(sum(2, 3));

// Define a function named product that takes two arguments
//    a (number)
//    b (number)
//
// Return the product of these two arguments
function product(a, b) {
  return a * b;
}

//console.log(product(3, 4));

// Define a function named sumAndProduct that takes three arguments
//    x (number)
//    y (number)
//    z (number)
//
// Return the sum of the first two arguments multiplied by the third argument.
// For example, given 1, 2, and 5, then return 15.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping
function sumAndProduct(x, y, z) {
  return (x + y) * z;
}

//console.log(sumAndProduct(3, 4, 5));

// Define a function named roundUp that takes one argument
//    decimal (number)
//
// Return the argument rounded up to the nearest integer
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
function roundUp(decimal) {
  return Math.ceil(decimal);
}

//console.log(roundUp(1.9));


// Define a function named toFahrenheit that takes one argument
//    celsius (number)
//
// Return the argument converted to Fahrenheit rounded to the nearest integer.
// Use Google to find the formula.
function toFahrenheit(celcius) {
  var constant = 32;

  return Math.round(celcius * 1.8 + constant);
}

//console.log(toFahrenheit(30));

// Define a function named areaOfCircle that takes one argument
//    radius (number)
//
// Return the area of a circle using that argument. Use Google to find the
// formula.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
  // ES6 return Math.PI * (radius ** 2);
}

//console.log(areaOfCircle(20));

// Define a function named areaOfRing that takes two arguments
//    outerRadius (number)
//    innerRadius (number)
//
// Return the area of a circular ring using these arguments. Use Google to find
// the formula.
function areaOfRing(outerRadius, innerRadius) {
  return Math.PI * (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2));
  // below line of code calls the above function, meaning I don't need to write the formula again.
  // return areaOfCircle(outerRadius) - areaOfCircle(innerRadius);
}

//console.log(areaOfRing(10, 7));
// Define a function named greet that takes 2 arguments
//    firstName (string)
//    lastName (string)
//
// Return a string in the format 'Hello, Kelly Rippa!' using these arguments
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Template_strings
function greet(firstName, lastName) {
  return 'Hello, ' + firstName + ' ' + lastName + '!';
}

console.log(greet('Rachelle', 'Rathbone'));

// Define a function named toSentence that takes four arguments
//    word1 (string)
//    word2 (string)
//    word3 (string)
//    oxfordComma (boolean)
//
// If oxfordComma is true,
//    Return a string in the format "word1, word2, and word3."
// If oxfordComma is false,
//    Return a string in the format "word1, word2 and word3."
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String_operators
function toSentence(word1, word2, word3, oxfordComma) {
  if (oxfordComma) {
    return word1 + ', ' + word2 + ', and ' + word3 + '.';
  } else {
    return word1 + ', ' + word2 + ' and ' + word3 + '.';
  }
}
// console.log(toSentence('Red', 'Blue', 'Green', true));
// console.log(toSentence('Red', 'Blue', 'Green', 1));
// Define a function named toRoman that takes one argument
//    arabic (number)
//
// If the argument is less than 1
//    Return null
// If the argument is greater than 10
//    Return null
// Otherwise
//    Return the argument converted to a roman numeral string
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#switch_statement

function toRoman(arabic) {
  // alt way: create an array
  // var romanNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
  if(arabic < 1) {
    return null;
  } else if (arabic > 10) {
    return null;
  } else {
    // return romanNumbers[arabic - 1]
    switch(arabic) {
      case 1: return 'I'
      break;
      case 2: return 'II'
      break;
      case 3: return 'III'
      break;
      case 4: return 'IV'
      break;
      case 5: return 'V'
      break;
      case 6: return 'VI'
      break;
      case 7: return 'VII'
      break;
      case 8: return 'VIII'
      break;
      case 9: return 'IX'
      break;
      case 10: return 'X'
      break;
    }
  }
}

console.log(toRoman(6));

// Define a function toDolla that takes one argument
//    amount (number)
//
// Return the argument converted to a dollar currency string. For example, given
// 10, then return '$10.00'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function toDolla(amount) {
  return '$' + amount.toFixed(2);
}


// Define a function named percentage that takes two arguments
//    numerator (number)
//    denominator (number)
//
// Return the percentage of the first argument divided by the second. For
// example, given 1 and 4, then return '25.0%'.
function percentage(numerator, denominator) {
  return ((numerator/denominator) * 100).toFixed(1) + '%';
}

console.log(percentage(1, 4));



// Define a function named isStrictlyEqual that takes two arguments
//    value1 (anything)
//    value2 (anything)
//
// If the two arguments are both equal and have the same type
//    Return true
// Otherwise
//    Return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Strict_equality_using
//
// See https://dorey.github.io/JavaScript-Equality-Table/
function isStrictlyEqual(value1, value2) {
  if(value1 === value2) {
    return true;
  } else {
    return false;
  }
}


// Define a function named isLooselyEqual that takes two arguments
//    value1 (anything)
//    value2 (anything)
//
// If the two arguments are both equal regardless of type
//    Return true
// Otherwise
//    Return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
function isLooselyEqual(value1, value2) {
  if(value1 == value2) {
    return true;
  } else {
    return false;
  }
}


// Define a function named remainder that takes two arguments
//    numerator (number)
//    denominator (number)
//
// Return the remainder of the first argument divided by the second. For
// example, given 4 and 3, then return 1.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
function remainder(numerator, denominator) {
  return numerator % denominator;
}

console.log(remainder(4, 3));


// Define a function named isEven that takes one argument
//    integer (number)
//
// If the number is even
//    Return true
// Otherwise
//    Return false
//
// Hint: What number will give you a remainder of 0 if the argument is even?
function isEven(integer) {
  if(integer % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(23));


// Define a function named isOdd that takes one argument
//    integer (number)
//
// If the number is odd
//    Return true
// Otherwise
//    Return false
function isOdd(integer) {
  if(integer % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}


// Define a function named isVowel that takes one argument
//    letter (string)
//
// If the letter is a vowel
//    Return true
// Otherwise
//    Return false
//
// Treat 'y' as a consonant.
function isVowel(string) {
  switch(string) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    return true;
    break;

    default:
    return false;
  }
}

console.log(isVowel('e'));

// Define a function named largestOfThree which takes three arguments
//    value1 (number)
//    value2 (number)
//    value3 (number)
//
// Return the largest argument by value
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
function largestOfThree(value1, value2, value3) {
  if(value1 > value2 && value1 > value3) {
    return value1;
  } else if (value2 > value1 && value2 > value3) {
    return value2;
  } else {
    return value3;
  }
}

console.log(largestOfThree(9, 10, 18));

// Define a function named longestOfThree which takes three arguments
//    value1 (string)
//    value2 (string)
//    value3 (string)
//
// Return the longest argument by length
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// Define a function named longestOfThree which takes three arguments
//    value1 (string)
//    value2 (string)
//    value3 (string)
//
// Return the longest argument by length
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function longestOfThree(value1, value2, value3) {
  var value1Length = value1.length;
  var value2Length = value2.length;
  var value3Length = value3.length;

  // if the length of value1 is longer than the other values, return value1.
  if (value1Length > value2Length && value1Length > value3Length) {
    return value1;
  // if the length of value2 is longer than the other values, return value2.
  } else if (value2Length > value1Length && value2Length > value3Length) {
    return value2;
  // otherwise, return value 3.
  } else {
    return value3;
  }
}

console.log(longestOfThree('cat', 'mouse', 'chimpanzee'));




// Define a function named iceCreamPosition that takes two arguments
//    pieTemperature (string)
//    iceCreamFlavor (string)
//
// If iceCreamFlavor is 'cardamom'
//    Return 'not at all' immediately
// Otherwise
//    If pieTemperature is 'cold'
//      Return 'on top'
//    If pieTemperature is 'warm'
//      Return 'on the side'
// Otherwise
//    Return 'up to you'
function iceCreamPosition(pieTemperature, iceCreamFlavor) {
  if(iceCreamFlavor === 'cardamom') {
    return 'not at all';
  }
  else if(pieTemperature === 'cold') {
      return 'on top';
  }
  else if(pieTemperature === 'warm') {
      return 'on the side';
    }
  else {
    return 'up to you';
  }
}

console.log(iceCreamPosition('warm', 'cardamom'));


// Define a function named isLeapYear that takes one argument
//    year (number)
//
// If the argument is a leap year
//    Return true
// Otherwise
//    Return false
//
// See: https://en.wikipedia.org/wiki/Leap_year#Algorithm
function isLeapYear(year) {
   if(year % 400 === 0) {
    return true;
   }
   if (year % 100 === 0) {
    return false;
   }
   if (year % 4 === 0) {
    return true;
   }
   else {
    return false;
   }
}
  console.log(isLeapYear(1904));



// Define a function named shout that takes one argument
//    message (string)
//
// Return the same argument but all in uppercase letters. For example, given
// 'Shut the front door', then return 'SHUT THE FRONT DOOR'
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
function shout(message) {
  return message.toUpperCase();
}

console.log(shout('shut the front door!'));


// Define a function named whisper that takes one argument
//    message (string)
//
// Return the same argument but all in lowercase letters and prefixed by
// 'shhh... '. For exaple, given 'GOLF TIME', then return "shhh... golf time"
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
function whisper(message) {
  return 'shhh... ' + message.toLowerCase();
}

console.log(whisper('GOLF TIME'));


// Define a function named stopAt that takes two arguments
//   source (string)
//   stop (string)
//
// Return the source all the way up to the position where stop begins. For
// example, given 'how now brown cow' and 'brown', then return 'how now'.
//
// Hint: This will require a combination of 3 different steps
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
function stopAt(source, stop) {
  var beginningOfStop = source.indexOf(stop);
  var str = source;
  var res = str.slice(0, beginningOfStop -1);

  return res;

}
console.log(stopAt('how now brown cow', 'brown'));

// Define a function named capitalize that takes one argument
//    message (string)
//
// Return the argument with the first letter capitalized. For example, given
// 'oh, you', then return 'Oh, you'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
function capitalize(message) {
  return message[0].toUpperCase() + message.slice(1);
}

console.log(capitalize('oh, you'));


// Define a function named leftPad5 that takes one argument
//    word (string)
//
// If the argument's length is less than 5
//    Return the argument but prefixed with spaces until it's 5 characters long
// If the argument's length is 5 or more characters
//    Return the argument
function leftPad5(word) {
  if (word.length >= 5) {
      return word;
  }

  // need to find length of string
  var lengthOfWord = word.length;
  // subtract length from 5
  var paddingRequired = 5 - lengthOfWord;
  // add difference as number of spaces at start of string
  for (var i = 0; i < paddingRequired; i++) {
    word = ' ' + word;
  }
  return word;
}

console.log(leftPad5('cat'));

// Define a function named superPicky that takes one argument
//    value (anything)
//
// If the argument is a string,
//    Return 'Thanks! Got it.'
// Otherwise
//    Return 'I wanted a string, but all I got was a stinking TYPE'
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
function superPicky(value) {
  if(typeof value === 'string') {
    return 'Thanks! Got it.'
  } else {
    return 'I wanted a string, but all I got was a stinking ' + typeof(value);
  }
}

console.log(superPicky('4'));

// Define a function named calculateTaxRate that takes two arguments
//    salary (number from 1 to 74,900)
//    status (string that's either 'single' or 'joint')
//
// If the status is anything other than 'single' or 'joint'
//    Return a string that says 'Better call an accountant'
// If the salary is greater than 74,900
//    Return a string that says 'Better call an accountant'
// Otherwise
function calculateTaxRate(salary, status) {
  // if status is not single and status is not joint
  if ((status !== 'single' && status !== 'joint') || salary > 74900) {
    return 'Better call an accountant';
  }

  // if status is single, then review salary based on single tax tables
  if (status === 'single') {
    if (salary < 9226) {
    return '10%';
    } else {
      return '15%';
    }
  }

  // if we have reached this section, status is joint.
  // review salary based on joint tax tables.
  if (salary < 18451) {
      return '10%';
  } else {
      return '15%'
  }

}

console.log(calculateTaxRate(50400, 'joint'));
