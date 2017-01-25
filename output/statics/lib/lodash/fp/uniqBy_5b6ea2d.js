var convert = require('lib/lodash/fp/convert'),
    func = convert('uniqBy', require('lib/lodash/uniqBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
