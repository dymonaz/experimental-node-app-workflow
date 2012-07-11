if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof buster === 'undefined') { var buster = require("buster"); }

define("test/dec2roman-common.test", ["../src/dec2roman-common"], function(dec2roman) {
	var testCases = {};

	[
		[1, 'i'],
		[2, 'ii'],
		[3, 'iii'],
		[4, 'iv'],
		[5, 'v'],
		[6, 'vi'],
		[8, 'viii'],
		[9, 'ix'],
		[10, 'x'],
		[26, 'xxvi'],
		[39, 'xxxix'],
		[40, 'xl'],
		[50, 'l'],
		[90, 'xc'],
		[100, 'c'],
		[102, 'cii'],
		[400, 'cd'],
		[500, 'd'],
		[900, 'cm'],
		[1000, 'm'],
		[2012, 'mmxii']
	].forEach(function(v) {

		var input = v[0], expected = v[1];
		testCases["should return "+expected+" when "+input] = function()
		{
			assert.equals(dec2roman.convert(input), expected);
		}

	});

	buster.testCase("dec2roman", testCases);

});