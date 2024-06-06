const { query, body, param, checkSchema } = require('express-validator');

var c = checkSchema({
    'addresses.*.street': {
      notEmpty: true,
    },
    'addresses.*.number': {
      isInt: true,
    },
  });
console.log(c);