var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
var last = function(arr)	{
	alert(arr[arr.length - 1]);
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here
var looper = function(arr)	{
	for(var i = arr.length - 1; i >= 0; i--)	{
		if(arr[i] % 2)	{
			arr.splice([i], 1);
		}
	}
	return arr;
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here
var numberLooper = function(arr)	{
	var number = getRandomArbitrary();
	for (var i = arr.length -1; i >= 0; i--)	{
		if(number === arr[i])	{
			return true;
		}
	}
	return false;
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here
second = [];
second = first.slice(0, first.length);
second.push(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here
var longest = function(string)	{
	var str = string.split(" ");
	var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here

var capitalize = function(str)	{
	var strSplit = str.split(" ");
	for (var i = 0; i < strSplit.length; i++)	{
		strSplit.charAt(0).toUpperCase;
	}
		
}

//NEED HELP

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
strSplit = [theOdyssey.slice(0, theOdyssey.length).split('')]
vowelArr = [];
var vowelCounter = function(arr)	{
	for (var i = arr.length - 1; i >= 0; i--)	{
		if(arr(i) === "a" | "e" | "o" | "i" | "u" | "y")	{
			vowelArr.push[i];
		}
	}
}
//NEED HELP	

var vowelCounter = function (arr) {
	strSplit = arr.split('');
	for (var i = strSplit.length)
}
