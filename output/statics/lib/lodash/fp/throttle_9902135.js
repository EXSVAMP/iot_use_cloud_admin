var convert = require('lib/lodash/fp/convert'),
    func = convert('throttle', require('lib/lodash/throttle'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
