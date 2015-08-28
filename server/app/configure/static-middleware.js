"use strict";
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');

module.exports = function (app) {

    var root = app.getValue('projectRoot');

    var npmPath = path.join(root, './node_modules');
    var publicPath = path.join(root, './public');
    var browserPath = path.join(root, './browser');
	var languagePath = path.join(root, './server/languages');

    app.use(favicon(app.getValue('faviconPath')));
    app.use(express.static(languagePath));
    app.use(express.static(npmPath));
    app.use(express.static(publicPath));
    app.use(express.static(browserPath));

};
