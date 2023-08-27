var dataset = require('../model/m_dataset')

class Visualization {
    index(req, res) {
        var task = "Transcriptome Landscape Visualization";
        var desc = "Computational methods in this category aim at representing the high-dimensional scRNA-seq data in a low dimensional space while preserving the relevant structure of the data.";
        dataset.get_dataset_list()
        .then((rows)=> {
            res.render('dataset_selection', {layout: 'main.hbs', exist_data:true, data:JSON.parse(rows), TASK:task, desc:desc, can_use:true, action:"Visualize"}); 
        })
        .catch((err) => res.render('dataset_selection', {layout: 'main.hbs', exist_data:false, data:null, TASK:task, desc:desc, can_use:true, action:"Visualize"}));
    }
}

module.exports = new Visualization;