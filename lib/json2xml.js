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
                result += "<"+key+">"+json[key]+"</"+key+">";
                break;
        }
    }
    if(name != "") {
        result = header+result+footer;
    }
    
    return result;
}