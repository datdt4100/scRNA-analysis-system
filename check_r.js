const R = require('r-integration');

let result = R.executeRScript("./ex-sync.R");
console.log(result);