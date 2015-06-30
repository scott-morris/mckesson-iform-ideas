"use strict";

var gulp          = require("gulp");
var fs            = require("fs");
var pageData      = require('js-yaml').safeLoad(fs.readFileSync("./data/pain_meds.yml"));
var handlebars    = require("gulp-static-handlebars");
var ext_replace   = require('gulp-ext-replace');
var argv          = require("yargs").argv;
var target        = argv.target;
var hb            = require('gulp-hb');

gulp.task("default", function () {
	gulp.src("*.hbs", { cwd: "./src/handlebars/" })
	.pipe(hb({
		data: pageData,
		helpers: [
			"./node_modules/handlebars-helper-repeat/index.js",
			"./src/handlebars/helpers/**.js"
		],
		partials: "./src/handlebars/partials/**.hbs",
		parseHelperName: function(file) {
			var ret = file.exports.toString();

			ret = ret.substr('function '.length);
			ret = ret.substr(0, ret.indexOf('('));
			return ret;
		}

	}))
	.pipe(ext_replace(".vgr"))
	.pipe(gulp.dest("./build"));
});
