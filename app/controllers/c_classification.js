var dataset = require('../model/m_dataset')

class Classification {
    index(req, res) {
        var task = "Cell Classification";
        var desc = "Once the cellular subpopulations have been determined and validated, classification techniques can be used to determine the composition of new data sets by classifying cells into discrete types.";
        dataset.get_dataset_list()
        .then((rows)=> {
            res.render('analyze', {layout: 'main.hbs', exist_data:true, data:JSON.parse(rows), TASK:task, desc:desc, can_use:false, action:"Classify"}); 
        })
        .catch((err) => res.render('analyze', {layout: 'main.hbs', exist_data:false, data:null, TASK:task, desc:desc, can_use:false, action:"Classify"}));
    }
    exec(req, res){
        var file = JSON.parse(JSON.stringify(req.body));
        //this.file = file;
        //console.log(this.file);
        res.send(req.body);
    }
}

module.exports = new Classification;