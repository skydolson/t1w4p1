console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test

console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return "Hello, " + name +"!";
}

// Remember to call the function to test
console.log(helloName("Stacy"));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log("testing addNumbers", addNumbers(3,4));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  return num1 * num2 * num3;
}
console.log("Testing multiplyThree", multiplyThree(2,3,4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'Testing 3 with the function isPositive - should say true', isPositive(3) );
console.log( 'Testing 0 with isPositive - should say false', isPositive(0) );
console.log( 'Testing -3 with isPositive()', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array.pop();
}
let array1 = []
let array2 = [3,4,2]
console.log("Testing getLast on empty array", getLast(array1));
console.log("Testing getLast on numeric array", getLast(array2));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  
  for (const x of array) {
    if (x == value) {
      return true;
    } else {
      return false;
    }
  }
}

let array3 = ["stuff", "things", "crap"];
console.log("testing find, expecting true", find("stuff", array3));
console.log("testing find, expecting false", find("junk", array3));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let firstLetter = string[0];
  if (letter == string[0]) {
    return true;
  } else {
    return false;
  }

}
console.log( 'Testing: is a the first letter of apple with isFirstLetter? Should say true', isFirstLetter('a', 'apple') );
console.log( 'Testing: is z the first letter of apple with isFirstLetter? Should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (const x of array){
    sum = sum + x;
  }
  return sum;
}

array4 = [448, -392, 204, 200, -193, 371]
console.log("testing sumAll for a numeric array", sumAll(array4));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPos(array) {
  let posArray = []
  for (const x of array){
    
    if (x > 0) {
      posArray.push(x)
    }
  }
  return posArray;
}
console.log("testing allPos on a numeric array", allPos(array4));
console.log("testing allPos on an empty array", allPos([]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Taken from edabit: https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

//This function counts the number of matches in a given number of match-stick
//houses constructed in a row, a function that takes the number houses as an 
//argument and returns the total number of matchsticks used at that step.
// The visuals on the webpage indicate that base house shall be constructed with 6 matches, 
//with 5 additional matches needed per house in the row.

// Examples
// matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21

// matchHouses(87) ➞ 436

function countMatches(houses) {
  step = houses - 1
  return 6 + step * 5;
}
console.log(countMatches(11));