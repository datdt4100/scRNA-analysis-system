const mysql = require('mysql');

class Database{
    constructor() {
		this.conn = mysql.createPool({
			connectionLimit: 10,
			host: '127.0.0.1',
			user: 'root',
			password: '',
			database: 'scrna_sys',
            multipleStatements: true,
			debug: false
		});
	}
}

module.exports = Database;