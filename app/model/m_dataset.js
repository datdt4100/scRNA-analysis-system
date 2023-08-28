
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
        return false;
    }
}

module.exports = new Dataset();