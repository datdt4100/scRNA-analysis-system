const R = require('r-integration');
result = R.executeRScript('init.R');
console.log('Check requirement of R completed!');
console.log(result);