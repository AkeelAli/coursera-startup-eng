#!/usr/bin/env node

var is_prime = function (n) {
    if ( n <= 1) { return false;}
    
    else {
        var i = 2;
	var bound = Math.ceil(Math.sqrt(n));
	for (i = 2; i <= bound; i++) {
	    // making n!=i explicit even if only n=2 would hit this
	    if ( n!= i && (n%i) == 0) { return false;}
	}
	
	// no divisor, therefore prime
	return true;
    }
};

var firstkprimes = function(k) {
    var i = 2;
    var arr = [];

    for (i = 2; arr.length < k; i++) {
	if (is_prime(i)) {
	    arr.push(i);
	}
    }

    return arr;
};

// formatting function
var fmt = function (arr) {
    return arr.join(",");
};

/* main */
var num_primes = 100;
var fs = require('fs');
var outfile = "primes.txt";
var out = fmt(firstkprimes(num_primes));
fs.writeFileSync(outfile, out);
