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
 
/*
 * Modifications (Ivo Georgiev <ivo@linvo.org>):
 *  Escape XML entities to avoid breaking the XML if any string in the JSON contains a special char
 *  Ignore special objects - objects that inherit other objects (in practice, when working with a third-party library, most of those are circular structures) 
 */
var json2xml = Object();

exports.toXml = function(name, json) {
    var header = "<"+name+">";
    var footer = "</"+name+">";
    var result = "";
    
    for(var key in json) 
    {
    	var node = json[key];
		if (node && typeof(node)=="object")
		{
			var constructName = node.constructor.name;
			if (constructName == "Array")
			{
				for(var elem in node) 
					result += this.toXml(key, json[key][elem], key);
            }
            else if (constructName == "Object")
				result += this.toXml(key, node, key);
		}
		else
			result += "<"+key+">"
				+( typeof(node)=="string" ? node.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') : node)
				+"</"+key+">";
    }
    if(name != "") 
    {
        result = header+result+footer;
    }
    
    return result;
}