var dataset = require('../model/m_dataset')

class Inference {
    index(req, res) {
        var task = "Pseudo-time Inference";
        var desc = "Cellular processes, such as cell cycle, proliferation, differentiation, and activation, can be modeled computationally using trajectory inference methods. These methods aim at ordering the cells along developmental trajec tories.";
        dataset.get_dataset_list()
        .then((rows)=> {
            res.render('analyze', {layout: 'main.hbs', exist_data:true, data:JSON.parse(rows), TASK:task, desc:desc, can_use:true, action:"Infer"}); 
        })
        .catch((err) => res.render('analyze', {layout: 'main.hbs', exist_data:false, data:null, TASK:task, desc:desc, can_use:true, action:"Infer"}));
    }
    exec(req, res){
        var file = JSON.parse(JSON.stringify(req.body));
        //this.file = file;
        //console.log(this.file);
        res.send(req.body);
    }
}

module.exports = new Inference;