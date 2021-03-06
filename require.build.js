({
	baseUrl: '.',
	name: 'externals/almond/almond.js',
	insertRequire: ['src/app'],
	mainConfigFile: "src/app.js",
	out: 'min/all.js',

	//optimize: 'none',

	inlineText: true,

	pragmasOnSave: {
		//removes Handlebars.Parser code (used to compile template strings) set
		//it to `false` if you need to parse template strings even after build
		excludeHbsParser: true,
		// kills the entire plugin set once it's built.
		excludeHbs: true,
		// removes i18n precompiler, underscore and json2
		excludeAfterBuild: true
	},

	paths: {
		"hbs": "externals/require-hbs/hbs",
		"Handlebars" : "externals/require-hbs/Handlebars"
		// if your project is already using underscore.js and you want to keep
		// the hbs plugin even after build (excludeHbs:false) you should set the
		// "hbs/underscore" path to point to the shared location like
		// "hbs/underscore" : "lib/undescore" to avoid loading it twice
	}
})
