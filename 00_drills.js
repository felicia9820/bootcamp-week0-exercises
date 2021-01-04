// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {
  return str.split("").reverse().join("");
}

// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }
}

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return -1;
  } else {
    let lst = [];
    for (let i = 0; i < arr1.length; i++) {
      let tup = [arr1[i], arr2[i]];
      lst.push(tup);
    }
    return lst;
  }
}

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {
  let lst1 = [];
  let lst2 = [];
  let lst = [];
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    let b = a[0];
    let c = a[1];
    lst1.push(b);
    lst2.push(c);
  }
  lst.push(lst1);
  lst.push(lst2);
  return lst;
}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
  let n = num % str.length;
  
  let first = str.substring(str.length - n);
  let second = str.substring(0, str.length - n);
  return first + second;
}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => {
  let currentdate = new Date(); 
  let day = currentdate.getDate();
  let year = currentdate.getFullYear();
  let hour = currentdate.getHours();  
  let min = currentdate.getMinutes();
  let month = currentdate.getMonth()+1;
  return `Today's date is January ${day}th, ${year}. It is ${hour}:${min} in the morning.`;
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
