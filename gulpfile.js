"use strict";

var gulp          = require("gulp");
var fs            = require("fs");
var pageData      = require('js-yaml').safeLoad(fs.readFileSync("./pageData.yml"));
var ext_replace   = require('gulp-ext-replace');
var argv          = require("yargs").argv;
var target        = argv.target;
var hb            = require('gulp-hb');

var mustache      = require("gulp-mustache");

gulp.task("default", function () {
	console.log("test");
	gulp.src("*.hbs", { cwd: "./src/templates/" })
		.pipe(hb({
			data: pageData,
			partials: "./src/templates/partials/**.hbs"
		}))
		.pipe(ext_replace(".html"))
		.pipe(gulp.dest("./dest"));
});
