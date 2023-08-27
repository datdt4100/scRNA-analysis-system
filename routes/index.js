const home = require('./r_home');
const visualization = require('./r_visualization');
const clustering = require('./r_clustering');
const classification = require('./r_classification');
const inference = require('./r_inference');
const dataset = require('../app/controllers/c_dataUpload');


function route(app) {
  app.use('/',home); 
  app.use('/classification',classification);
  app.use('/visualization',visualization);
  app.use('/clustering',clustering);
  app.use('/pseudo-time-inference',inference);
  app.use('/publication', (req, res) => {
      res.render('publication_viewer', {layout: 'main.hbs'});
  })
  app.post('/upload', dataset.uploadFile);
}

module.exports = route;
