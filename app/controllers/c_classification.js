var dataset = require('../model/m_dataset')

class Classification {
    index(req, res) {
        var task = "Cell Classification";
        var desc = "Once the cellular subpopulations have been determined and validated, classification techniques can be used to determine the composition of new data sets by classifying cells into discrete types.";
        dataset.get_dataset_list()
        .then((rows)=> {
            res.render('dataset_selection', {layout: 'main.hbs', exist_data:true, data:JSON.parse(rows), TASK:task, desc:desc, can_use:false, action:"Classify"}); 
        })
        .catch((err) => res.render('dataset_selection', {layout: 'main.hbs', exist_data:false, data:null, TASK:task, desc:desc, can_use:false, action:"Classify"}));
    }
}

module.exports = new Classification;