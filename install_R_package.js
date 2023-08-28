const R = require('r-integration');

let result = R.executeRScript("./init.R");
print(result);