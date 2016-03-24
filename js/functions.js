//EXERCISE 1
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Complete the following function to get the letter linked to a spanish DNI
// The functions receives an eight-digit number and returns a single letter.
// The algorithm to calculate the letter is as follows:
// The number is divided by 23 and the remainder is replaced by a letter determined by the following table: 
//	 _____________________________________________________________
//  | 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 |
//	| T R W A G M Y F P D X  B  N  J  Z  S  Q  V  H  L  C  K  E  |
//	|____________________________________________________________|
// 
// You can use 'result' variable to store the resulting letter.
// If your code works, the last three equalities will be "true"


/*

function dniLetter( dni ) {

	var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
	var result = '';
	var divide = dni % 23;

	if (divide > 0 && divide < 23) {
		result = lockup.charAt(divide);
	} else {
		result = "Invalid parameter";
	}


	return result;
}

console.log( dniLetter( 12345678 ) === 'Z');
console.log( dniLetter( 34667892 ) === 'S');
console.log( dniLetter( 92234488 ) === 'A');

*/



//EXERCISE 2
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Improve the exercise above to be able to perform this new functionality
// Of course it has to keep working as usual with right inputs.

/*

console.log( dniLetter( -1 ) === 'Invalid parameter');
console.log( dniLetter( "A1234567" ) === 'Invalid parameter');

*/

//EXERCISE 3
//
// Restore the comments marks (/* */) of the previous exercises. First two exercises have to be commented 
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Write a function that takes an array of words and returns the length of the longest one.

/*
function findLongestWord( array_words ){
	var longest = 0

	for (var i = 0; i < array_words.length; i++) {
		if (array_words[i].length > longest) {
			longest = array_words[i].length;
		}
	}

	return longest;
}

console.log( findLongestWord( ["Richie", "Joanie", "Greg", "Marcia", "Bobby"] ) ===6 );
console.log( findLongestWord( ["Blanka", "Zangief", "Chun Li", "Guile"] ) === 7 );
console.log( findLongestWord( ["Red", "Blue", "Green"] ) === 5 );

*/

//EXERCISE 4
//
// Uncomment the exercise code deleting /* and */ chars
// Now we are going to save the longest length of every array in a new array called array_lengths
// Open the console and reload the index page to see the result of the code.
// You have to complete the calculateAverage function (it is a few lines below), and it has
// to return the average of every number in a array instead of the "Not implemented yet" message.

/*
var array_lengths = [];
array_lengths.push( findLongestWord( ["Richie", "Joanie", "Greg", "Marcia", "Bobby"]) );
array_lengths.push( findLongestWord( ["Blanka", "Zangief", "Chun Li", "Guile"] ) );
array_lengths.push( findLongestWord( ["Red", "Blue", "Green"] ) );
array_lengths.push( findLongestWord( ["Mouse", "Tiger", "Dog"] ) );
array_lengths.push( findLongestWord( ["Mississippi", "Chicago", "Ciudad del Cabo"] ) );
array_lengths.push( findLongestWord( ["Bitcoin", "Safecoin", "Ethereum"] ) );


console.log( "These are the longest lengths of each group: " + array_lengths );
console.log( calculateAverage( array_lengths ) === 6 && "The average of longest lengths is: " + calculateAverage( array_lengths ))

function calculateAverage( array )
{
	var suma = 0;
	for( var i = 0; i < array_lengths.length; i++ ){
	    suma += array_lengths[i];
	}
	var avg = suma/array_lengths.length;
	return avg;

}
/*

// Now add more lengths to the array_lengths. You have to do it where <place to add more lines> is written. 
// You can use this structure: array_lengths.push( findLongestWord( [<add some elements>] ) );
// Don't foget to add words to the array. The longer the better!
// Now reload the page and see how changed the average.

/*

console.log("The average of longest lengths is: " + calculateAverage( array_lengths ))

*/

//EXERCISE 5
//
// Restore the comments marks (/* */) of the previous exercises.
// Uncomment this exercise code deleting /* and */ chars
// Now we are going to save the longest length of every array in a new array called array_lengths
// Open the console and reload the index page to see the result of the code.
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
// As a condition you must use the object freqCounter.
// Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

/*

function charFreq( string ) {
	freqCounter = {};

	for (var i = 0; i < string.length; i++) {
		var letter = string.charAt(i);

		if (isNaN(freqCounter[letter]) === true ){
			freqCounter[letter] = 1
		}else{
			freqCounter[letter] += 1;
		}

	}
	
	return freqCounter;
}


counter = charFreq("abbabcbdbabdbdbabababcbcbab");
console.log( counter['a'] === 7);
console.log( counter.b === 14);
console.log( counter['c'] === 3);

counter = charFreq("xyyyxyxyxzyxyzyxyxyasdfz");
console.log( counter.x === 7 );
console.log( counter['y'] === 10 );
console.log( counter.z === 3 );
console.log( counter['a'] === 1 );
console.log( counter['s'] === 1 );
console.log( counter.d === 1 );
console.log( counter['f'] === 1 );

*/

//BONUS EXERCISE
//
// Restore the comments marks (/* */) of the previous exercise
// Uncomment the exercise code deleting /* and */ chars
// Build a program that transform a boring array into an awesome array.
// The original array has to go through many processes, we divided every process
// in functions. You have to code these functions.
// Here you have some useful functions you can use wherever you need along the program.
// isFinite(), splice(), unshift(), push(), join(), sort(), Math.floor().
// These aren't all the needed functions, and also you can use different ones. They are only suggested functions.
// If you want to know what do they do or learn more functions, you can go to
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// http://www.w3schools.com/js/default.asp
// Use the search option in both of them to find a function.

/*

function arrayAwesomenator( array ) 
{
	array = deleteRubbish( array );
	array = arrangeElements( array );
	array = beautifyLetters( array );
	array = beautifyNumbers( array );
	array = sortArray( array );
	array = arrayToString( array );

	return array;
}
function deleteRubbish( array )
{
	for (var i = 0; i < array.length; i++) {
		if (array[i] === "*") {
			array.splice(i, 1);
		}
	}
	return array;
}

function arrangeElements( array )
{
	array = array.sort();
	return array;
}

function beautifyLetters( array )
{
	for (var i = 0; i < array.length; i++) {
		if (isFinite(array[i]) === true){     //(typeof array[i] == 'number')

		}else if (array[i].toLowerCase() === "a" || array[i].toLowerCase() === "e" || array[i].toLowerCase() === "i" || array[i].toLowerCase() === "o" || array[i].toLowerCase() === "u" ) {
			array[i] = array[i].toUpperCase();
		}else{
			array[i] = array[i].toLowerCase();
		}
	}

	return array;
}


function beautifyNumbers( array )
{

	for (var i = 0; i < array.length; i++) {

		if ((typeof array[i] == 'number')){
			
			if (array[i].toString().length > 1) {
				
				var digits = (""+array[i]).split("");
				var sum = 0;
				for (var i2 = 0; i2 < digits.length; i2++) {sum += Number(digits[i2]);}

				array [i] = sum;
				i = i - 1;
			}
			
		}
	}

	return array;	
}

function sortArray( array )
{


	var numarray = []
	var chaarray = []

	for (var i = 0; i < array.length; i++) {
		
		if ((typeof array[i] == 'number')){
			numarray.push (array[i]);
		} else {
			chaarray.push (array[i]);
		}
	}

	numarray = numarray.sort(function(a, b){return a-b});
	chaarray = chaarray.sort(function (a, b){return a.toLowerCase().localeCompare(b.toLowerCase());});

	array = numarray.concat(chaarray);
	return array;

}


function arrayToString( array )
{

	array = array.join("");
	return array;

}

console.log(arrayAwesomenator(["a", 6, "B", "F", "*", 8, 78, "J" ]) === "668Abfj");
console.log(arrayAwesomenator(["*", "j", 6, "A", "F", "*", 8, "C", "b", "a", 78, "J", 43523, 1111, "r", "q", "y" ]) === "46688AAbcfjjqry");

*/