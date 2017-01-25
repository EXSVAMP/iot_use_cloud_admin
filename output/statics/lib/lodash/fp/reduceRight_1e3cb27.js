var convert = require('lib/lodash/fp/convert'),
    func = convert('reduceRight', require('lib/lodash/reduceRight'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
