//Write a function that takes an array and a target number. It then goes through the numbers in the array to see if they sum of any 2 is equal to the target number.

function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          return true;
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/  //O(n²)

/* 
  Add your pseudocode here
    // ([a, b, c, d] , target) 
    // need to check a + b = target?
    // need to check a + c = target?
    // need to check a + d = target? 
    // need to check b + c = target? .....
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


// Rewrite the Problem in Your Own Words
// Write Your Own Test Cases
// Pseudocode
// Code
// Make It Clean and Readable
// Optimize