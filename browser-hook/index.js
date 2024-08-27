var myJsonParse = JSON.parse
JSON.parse = function (params) {
    console.log('myJsonParse', params)

    return myJsonParse(params);
}

var myJSONstringify = JSON.stringify;
JSON.stringify = function (value, replacer, space) {
    var undefined2null = function (k, v) { return (v === undefined) ? null : v }

    console.log('stringify', value);
    return myJSONstringify.call(this, value, (replacer || undefined2null), space)
};

// debug
var aaa = Function.prototype.constructor
Function.prototype.constructor = function (params) {
    console.log('Function.prototype.constructor', params)
    if (params = 'debugger') {
        return function () { }
    }
    return aaa.apply(this, arguments)
}

/**
 * 控制台注入 不能刷新
*/

 