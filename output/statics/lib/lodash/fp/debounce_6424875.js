var convert = require('lib/lodash/fp/convert'),
    func = convert('debounce', require('lib/lodash/debounce'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
