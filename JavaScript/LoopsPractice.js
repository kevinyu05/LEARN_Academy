// Loop Practice
// The Odd and Even
// Write a JavaScript function that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even")
  } else {
    console.log(i + " is odd")
  }
}

// The Fizz Buzz
// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let k = 1; k <= 100; k++) {
  if(k % 3 === 0 && k % 5 === 0) {
    console.log(k +" FizzBuzz");
  } else if (k % 3 === 0) {
    console.log(k + " Fizz");
  } else if (k % 5 === 0) {
    console.log(k + " Buzz");
  }
}
