var convert = require('lib/lodash/fp/convert'),
    func = convert('pullAllBy', require('lib/lodash/pullAllBy'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
