var convert = require('lib/lodash/fp/convert'),
    func = convert('drop', require('lib/lodash/drop'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
