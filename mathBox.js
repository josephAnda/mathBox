
//  Find the factorial of a number 
var mathBox = {
	factorial: function( number ) {
		var nextNumber = number - 1;
		//  Validate the input
		try {
			if (typeof number != "number") { throw this.errors.undef; } 

			if (typeof number == "number" && number < 0) { throw this.errors.negative; }
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
	combinations: function( choices, spots ) {
		try {
			if (typeof choices != "number" || typeof spots != "number") { 
				throw this.errors.undef; 
			}

			if ((typeof choices == "number" && choices < 0) || (typeof spots == "number" && spots <0)) {
				throw this.errors.negative;
			}
		}
		catch(err) {
			console.log(err);
			return false;
		}
		return this.factorial( choices ) / ( this.factorial( choices - spots) * this.factorial( spots ) );
	},
	//  Finds the number of permutations given a certain number of choice for a certain number of spots
	permutations: function( choices, spots) {
		try {
			if (typeof choices != "number" || typeof spots != "number") { 
				throw this.errors.undef; 
			}

			if ((typeof choices == "number" && choices < 0) || (typeof spots == "number" && spots <0)) {
				throw this.errors.negative;
			}
		}
		catch(err) {
			console.log(err);
			return false;
		}
		return this.factorial( choices ) / this.factorial( choices - spots) ;
	},
	findFactorsOf: function( number ) {
		factors = []
		for (var i=1; i<(number+1); i++) {
			if ( number % i == 0) {
				factors.push(i);
			}
		}
		return factors;
	},
	errors: {
		undef: "That's not a number",
		negative: "Undefined for negative numbers"
	}
}