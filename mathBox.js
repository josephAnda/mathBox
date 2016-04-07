

var mathBox = {
	//  Find the factorial of a number (recursive solution)
	factorial: function( number ) {
		var nextNumber = number - 1;
		//  Validate the input
		try {
			if (!this.conditions.isNumber( number )) { throw this.errors.undef; } 

			if (this.conditions.isNegative( number )) { throw this.errors.negative; }
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
		return this.factorial( nextNumber ) * number;
	},
	//  Find the combinations of 'n' items taken 'r' at a time 
	combinations: function( choices, spots ) { return this.factorial( choices ) / ( this.factorial( choices - spots) * this.factorial( spots ) ); },
	//  Finds the number of permutations given a certain number of choice for a certain number of spots
	permutations: function( choices, spots) { return this.factorial( choices ) / this.factorial( choices - spots); },
	//  brute force algorithm to find factors 
	findFactorsOf: function( number ) {
		factors = []
		try {
			if ( !this.conditions.isNumber( number ) ) { throw this.errors.undef; }

			if (this.conditions.isNegative( number )) { throw this.errors.negative; }
		}
		catch(err) {
			console.log(err);
			return false;
		}
		for (var i=1; i<(number+1); i++) {
			if ( number % i == 0) {
				factors.push(i);
			}
		}
		return factors;
	},
	//  derived from findFactorsOf via more brute force
	greatestCommonFactor: function( number1, number2 ) {
		var factors1 = this.findFactorsOf( number1 );
		var factors2 = this.findFactorsOf( number2 );
		var GCF = 1;
		for (var i=0; i<factors1.length; i++) {
			for (var j=0; j<factors2.length; j++) {
				if ( factors1[i] == factors2[j] ) {
					GCF = factors1[i];
				}
			}
		}
		return GCF;
	},
	//  derived from findFactorsOf via more brute force (Iterative solution)
	leastCommonMultiple: function( number1, number2 ) {
		var larger = number1;
		var smaller = number2;
		if (number2 > number1) {
			larger = number2;
			smaller = number1;
		}
		if (number2 == number1 || number2 == 1) { return number1; }
		if (number1 == 1) { return number2; }
		var maxLCM = number1 * number2;
		var currentLCM = larger;
		for (var i=1; (i*larger) <= maxLCM; i++) {
			currentLCM = (i*larger);
			if (this.findFactorsOf(currentLCM).indexOf(smaller) != -1) {
				return currentLCM;
			}
		}
	},
	//  derived from findFactorsOf via more brute force
	findPrimeFactors: function( number ) {
		var primeFactors = [];
		var factors = this.findFactorsOf( number );
		try {
			if ( this.conditions.tooBig(number) ) { throw this.errors.tooBig; }
		}
		catch(err) {
			console.log(err);
			return false;
		}
		for (var i=0; i<factors.length; i++) {
			if (this.findFactorsOf(factors[i]).length == 2) {
				primeFactors.push( factors[i] );
			}
		}
		return primeFactors;
	},
	//  custom error booleans 
	conditions: {
		isNumber: function( entry ) {
			if (typeof entry != "number") {
				return false;
			} else {
				return true;
			}
		},
		isNegative: function( entry ) {
			if (typeof entry == "number" && entry < 0) {
				return true;
			} else {
				return false;
			}
		},
		tooBig: function ( entry ) {
			if (typeof entry == "number" && entry > 25000000) {
				return true;
			} else {
				return false;
			}
		}
	},
	//  custom error messages
	errors: {
		undef: "That's not a number",
		negative: "Undefined for negative numbers",
		tooBig:  "Too big, bro"
	}
}