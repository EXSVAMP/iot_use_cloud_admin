var convert = require('lib/lodash/fp/convert'),
    func = convert('forEachRight', require('lib/lodash/forEachRight'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
