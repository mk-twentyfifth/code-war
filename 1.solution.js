function solution(str, ending) {
  if (str.endsWith(ending)) {
    return true
  } else {
    return false
  }
}

// Create a Date
const time = new Date();
console.log((time instanceof Date))

const fruits = ["apples", "bananas", "oranges"];

console.log((fruits instanceof Map))

let text = "How are you doing today?";
const myArray = text.split(" ", 3);

console.log(myArray)