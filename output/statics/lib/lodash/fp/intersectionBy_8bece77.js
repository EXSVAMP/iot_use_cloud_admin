var convert = require('lib/lodash/fp/convert'),
    func = convert('intersectionBy', require('lib/lodash/intersectionBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
