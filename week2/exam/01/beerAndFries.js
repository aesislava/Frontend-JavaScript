	"use strict";


	var maxScore = function (arr) {

		var beer = [];
		var fries = [];
		var product = 0;

	    arr.forEach(function (element) {
	        if (element.type === "beer") {
	            beer.push(element.score);
	        } else if (element.type === "fries") {
	            fries.push(element.score);
	        }
	    });

	    beer.sort(function(a,b){return a-b;});
	    fries.sort(function(a,b){return a-b;});

	    beer.forEach(function (pint) {
	    	var fint = fries.shift();
	        product = product + pint * fint;
	    });

	    return product;
	};