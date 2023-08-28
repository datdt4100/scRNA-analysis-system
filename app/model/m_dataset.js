
const Database = require('./m_general');

class Dataset extends Database {
    get_dataset_list (){
        var statement = 'SELECT * FROM `dataset` WHERE 1';
        return new Promise((resolve, reject) => {
            this.conn.query(statement, (err, rows) => {
                if (err) return reject(err);
                resolve(JSON.stringify(rows));
            });
        });
    }
    update_dataset(file_dict){
        console.log('here');
        var statement = "INSERT INTO `dataset`(`name`, `filename`, `tissue`, `publish_year`, `status`) VALUES ('"+ file_dict.datasetname +"','"+file_dict.filename+"','"+file_dict.tissue+"',"+file_dict.year+",'"+file_dict.status+"');"
        return new Promise((resolve, reject) => {
            this.conn.query(statement, (err, rows) => {
                if (err) return reject(err);
                resolve(JSON.stringify(rows));
            });
        });
    }
}

module.exports = new Dataset();