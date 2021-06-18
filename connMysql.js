const mysql = require('mysql');
const pool = mysql.createPool({ host: 'localhost', user: 'root', password: 'root', database: 'db11' });

//查询所有表名
function _getTable(callback) {
    pool.query('show tables', function (err, res) {
        let tables = [];
        for (let i = 0; i < res.length; i++) {
            tables[i] = res[i].Tables_in_db11;
        }
        callback(tables);
    });
};

function getTable(callback) {
    return _getTable(callback);
}

//获取表的所有字段名
function _getItems(callback) {
    pool.query('desc tab11', function (err, res) {
        let items = [];
        for (let i = 0; i < res.length; i++) {
            items[i] = res[i].Field;
        }
        let str = items.toString();
        this_items = ``;
        for (let i = 0; i < items.length; i++) {
            if (i < items.length - 1) {
                this_items += `     this.${items[i]} = ${items[i]};
`;
            } else {
                this_items += `     this.${items[i]} = ${items[i]};`;
            }

        }
        callback(this_items, str);

    });
}
function getItems(callback) {
    return _getItems(callback);
}



module.exports = {
    getItems,
    getTable
};