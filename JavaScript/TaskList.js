// Variables Challenge
//
// Here are a few exercises for you to practice using variables:
//
// Set a variable called my_favorite_number equal to your favorite number.
var my_favorite_number = 27

// What is your favorite number divided by 2
console.log(my_favorite_number / 2); //13.5

// Set another variable called someones_favorite equal to 13
var someones_favorite = 13

// Change the value of someones_favorite to 7
var someones_favorite = 7

// Subtract your favorite number from someones_favorite
console.log(my_favorite_number / someones_favorite); //3.86
//Although there are two of the same variable names, the last same variable name will be used as computation

// Change the value of my favorite number to be 26 times its current value
console.log(my_favorite_number * 26); //702

// Strings Challenge
//
// Javascript comes with some built in ways to work with Strings. For this exercise, try out some of the string methods for yourself.
// Try locating a word in a string
//
// Locate
//
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
var res = str.charAt(7)
console.log(pos); // 7


// What do you get back when you run this indexOf method on a string?
var str1 = "Kevin is cool"
var n1 = str1.indexOf("is")
console.log(n1); // 6

// What happens with this method if a word occurs twice in a string?
//indexOf method returns the index within the calling String object of the first occurence of the specified value
var str2 = "Please locate where locate occurs as it should occur!";
var pos2 = str2.indexOf("occur")
console.log(pos2); // 27


// Can you run this method on data types other than string?
// you can only run this method for strings

// Find the length of a string

// You can call a method on a string by typing str.length (just like we did with indexOf above). Create a variable to hold a string and call .length on it to see what happens.
var str4 = "Kevin"

// What is returned by the .length method?
console.log(str4.length); // 5

// What if there are spaces in the string?
// the result will be the length of the string including spaces
var str5 = "Kevin the coder"
console.log(str5.length); // 15

// Can you call this method on other data types?
// the only data types that can be used with this method are strings

//create a function that will return highest number of two numbers that are being compared
function greaterNum(num1, num2) {

  //utilize an if statement to compare two values returning the highest value
  if (num1 > num2) {
    return num1
  } else {
    if (num2 > num1) {
      return num2
    }
  }
}

//invoke function with values to be passed through and compared
console.log(greaterNum(1, 3))

//create a function that takes in 1 argument, a language code and returns "Hello, World" for the given language
function helloWorld(lang) {

  //utilize an if statement that takes in a value of a language code and returns "Hello, World" for the given language
  if (lang === "es") {
    return "Hola, Mundo"
  } else if (lang === "de") {
    return "Hallo, Welt"
  } else if (lang === "en") {
    return "Hello, World"
  }
}

//invoke helloWorld function with values as language codes being passed through to return "Hello World" for the given language
console.log(helloWorld("en"))

//write a function named assignGrade that takes 1 argument (a number score) and returns a grade for the score
function assignGrade(grade) {

  //utilize if statements comparing the grade value being passed through to return a grade for a specifed score
  if (grade >= 90) {
    return "A"
  } else if (grade < 90 && grade >= 80) {
    return "B"
  } else if (grade < 80 && grade >= 70) {
    return "C"
  } else if (grade < 70 && grade >= 60) {
    return "D"
  } else {
    return "F"
  }
}

//invoke assignGrade function with number being passed through as a grade value
console.log(assignGrade(69));

//write a function named pluralizer that takes in two arguments and returns the number and pluralized form of the noun, if necessary
function pluralizer(num, noun) {

  //write an if statement showing if num > 1 it will return the number and pluralized form
  //if not then return then a non pluralized noun
  if (num > 1) {
    return num + " " + noun + "s"
  } else {
    return num + " " + noun
  }
}

//invoke pluralizer function with values being passed through to be computed
console.log(pluralizer(1, "cat"));
