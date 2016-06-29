//Returns the first non-repeated character 
function findChar(word) {

	var currentLetter = "";
	var appear = 0;

	for (var i=0; i<word.length; i++) {
		currentLetter = word[i];
		appear = 1;

		for (var j=0; j<word.length; j++) {
			if( i!=j && currentLetter == word[j] ) { appear++; }
			//  breaks if it appears more than once, thus shortening the algorithm run-time
			if (appear == 2) { break; }
		}
		if (appear == 1) { return currentLetter; }
	}
}

//  As long as the specified letter is found in the string, this method removes it.  
//  When the letter is no longer found, it returns the word
function removeCharacter( string, remove ) {
	currentLetter = "";
	for (var i=0; i<remove.length; i++) {
		currentLetter = remove[i];
		while(string.indexOf(currentLetter) != -1) {
			string = string.replace(currentLetter, "");
		}
	}
	return string
}

//  Find the factorial of a number 
function factorial( number ) {
	var nextNumber = number - 1;
	//  Validate the input
	try {
		if (typeof number != "number") { throw "That's not a number"; } 

		if (typeof number == "number" && number < 0) { throw "Undefined for negative numbers"; }
	}
	//  React to invalid input
	catch(err) {
		console.log(err);
		return false;
	}
	//  The base case
	if ( number <= 1 ) {
		return 1;
	}
	//  The recursive case
	return factorial( nextNumber ) * number;
}
//  Takes a linked list populated with objects of format {value: 1, next: {}} and returns an array of the values
function listToArray(list) {
	var currentObject = list;
	var array = [];
	while (currentObject) {
    	array.push(currentObject.value);
    	currentObject = currentObject.next;
	}
	return array;
}

var OrderPeople = function(people){
	return people.sort( (a,b) =>  {
    	if (a.age < b.age) {
        	return -1;
    	}
    	if (a.age > b.age) {
      		return 1;
    	}
    	if (a.age == b.age) {
      		return 0;
    	}
    }); //complete this function
}

function reverse(str) {
  var rev = "";
  for (str.length; str.length >0; str = str.substring(0, str.length - 1)) {
    rev += str[str.length -1];
  }
  return rev;
	// Your code here
}

//  It might be worth trying to break down the syntax of the function below . . . 

function reverse(str) {
  return str.length > 1 ? reverse(str.slice(1)) + str[0] : str;
}
//  The core logic of a recursive function is to check to see if the base case has been reacheed (like being down to a single 
//  character)  If the base case is reached, a predictable return value is used.  If the base case is not reached, the function needs
//  to call itself on an modified argument (such as a substring of the original string).  

//  Note that 'p' is a function that is unterstood to return a boolean
Array.prototype.all = function (p) {
  var allGood = true;
  this.forEach(function(entry) {
    if (!p(entry)) { allGood = false; }
  })
  return allGood;
};

Array.prototype.none = function (p) {
  var noneGood = true;
  this.forEach(function(entry) {
    if (p(entry)) { noneGood = false; }
  })
  return noneGood;
};

Array.prototype.any = function (p) {
  var anyGood = false;
  this.forEach(function(entry) {
    if (p(entry)) { anyGood = true; }
  })
  return anyGood;
};

/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
  'use strict';

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function( number ) {
      var numberString = String( number ),
          sumOfDigits = 0;
      for (var i = 0; i < numberString.length; i++) { sumOfDigits += Number( numberString[i] ); }
      return ( number % sumOfDigits == 0 ) ? true : false;
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function( number ) {
      var nextNumber = number + 1;
      return this.isValid( nextNumber ) ? nextNumber : this.getNext( nextNumber );
    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function( count, start ) {
      var currentNumber = 1;
      var suite = [];
      if(start) { currentNumber = this.getNext( start ); }
      while(suite.length<count) {
        suite.push(currentNumber);
        currentNumber = this.getNext( currentNumber );
      }
      return suite;
      
    },

    }
  };

function titleCase(title, minorWords) {
  var titleWords = title.split(" ");
  if (minorWords) { 
    var minorArray = minorWords.split(" ").map( function(value) { return value.toLowerCase(); } );
  } else {
    var minorArray = [];
  }
  titleWords = titleWords.map( function(value, index) { 
    value = value.toLowerCase(); 
    return (index == 0 || !minorArray.includes(value)) ? value.charAt(0).toUpperCase() + value.slice(1) : value;
  } );
  return titleWords.join(" ");
}

//  Checks that a pin is a 4 or 6 digit number.  This breaks if there are any leading 0s
function validatePIN (pin) {
  return isNaN(Number(pin)) || (Number(pin).toString().length != 4 && Number(pin).toString().length != 6) ? false : true;
}

} () );	