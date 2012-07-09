if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof buster === 'undefined') { var buster = require("buster"); }

define(["../src/roman2dec"], function(roman2dec) {

	var testCases = {};

	[
		['i', 1],
		['ii', 2],
		['iii', 3],
		['iv', 4],
		['v', 5],
		['vi', 6],
		['viii', 8],
		['ix', 9],
		['x', 10],
		['xiv', 14],
		['xvii', 17],
		['xxxix', 39],
		['xl', 40],
		['xc', 90],
		['c', 100],
		['cd', 400],
		['d', 500],
		['cdxc', 490],
		['cm', 900],
		['mcmxcix', 1999],
		['mmxii', 2012]
	].forEach(function(v) {

			var input = v[0], expected = v[1];
			testCases["should return "+expected+" when "+input] = function()
			{
				assert.equals(roman2dec(input), expected);
			}

		});

	buster.testCase("roman2dec", testCases);


});