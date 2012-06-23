node-json2xml
===========

Description
-----------

Simple JavaScript Object to XML string converter.

Installation
------------

Simplest way to install `json2xml` is to use [npm](http://npmjs.org), just `npm
install json2xml` which will download json2xml and all dependencies.

Simple usage
-----------

    var util = require('util'),
    var json2xml = require('json2xml');

    console.log(json2xml.toXml("firstXmlTag",jsonData));

