const home = require('./r_home');
//const visualization = require('./r_visualization');
const clustering = require('./r_clustering');
//const classification = require('./r_classification');
//const inference = require('./r_inference');


function route(app) {
  app.use('/',home); 
  //app.use('/classification',classification);
  //app.use('/visualization',visualization);
  app.use('/clustering',clustering);
  //app.use('/pseudo_time_inference',inference);
}

module.exports = route;
