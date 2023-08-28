const dataset = require('../model/m_dataset');

class DatasetUpload {
    update(data_dict){
        console.log('here');
        if (data_dict.year == ''){
            data_dict.year = new Date().getFullYear();
        }
        dataset.update_dataset(data_dict);
    }
}

module.exports = new DatasetUpload;