var convert = require('lib/lodash/fp/convert'),
    func = convert('bindKey', require('lib/lodash/bindKey'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
