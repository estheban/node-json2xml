/**
 * Converts JSON object to XML string.
 *
 * @param name of the first tag
 * @param json object to convert
 * @return XML string 
 * 
 * Copyright(c) 2011 Etienne Lachance <et@etiennelachance.com>
 * MIT Licensed
 */

var json2xml = Object();

exports.toXml = function(name, json) {
    var header = "<"+name+">";
    var footer = "</"+name+">";
    var result = "";
    
    for(var key in json) {
        switch(Object.prototype.toString.call(json[key])) {
            case "[object Array]":
                for(var elem in json[key]) {
                    result += this.toXml(key, json[key][elem], key);
                }
                break;
            case "[object Object]":
                result += this.toXml(key, json[key], key);
                break;
            default:
                var xmlkey = key;
                // check is key is a number
                if (key+0 === key || parseInt(key, 10) == key) {
                    xmlkey = "item"; // use a generic key name
                }

                result += "<"+xmlkey+">"+json[key]+"</"+xmlkey+">";
                break;
        }
    }
    if(name != "") {
        result = header+result+footer;
    }
    
    return result;
}