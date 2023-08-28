const R = require('r-integration');
result = R.executeRScript('demo_analysis.R');
console.log('Check requirement of R completed!');
console.log(result);