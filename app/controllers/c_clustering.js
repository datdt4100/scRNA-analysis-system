var dataset = require('../model/m_dataset')

class Clustering {
    index(req, res) {
        var task = "Cell Segregation";
        var desc = "Cell segregation or clustering is considered the most powerful application of scRNA-seq data. This has led to the creation of a number of atlas projects, which aim to build the references of all cell types in model organisms at various developmental stages.";
        dataset.get_dataset_list()
        .then((rows)=> {
            res.render('analyze', {layout: 'main.hbs', exist_data:true, data:JSON.parse(rows), TASK:task, desc:desc, can_use:true, action:"Cluster"}); 
        })
        .catch((err) => res.render('analyze', {layout: 'main.hbs', exist_data:false, data:null, TASK:task, desc:desc, can_use:true, action:"Cluster"}));
    }
    exec(req, res){
        var file = JSON.parse(JSON.stringify(req.body));
        //this.file = file;
        //console.log(this.file);
        res.send(req.body);
    }
}

module.exports = new Clustering;