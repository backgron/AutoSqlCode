// /////////////////////////////////////////
// 文件名：createDao.js
// 说    明：生成数据操作的代码
// 数据库名：db11
// 表    名：通用
// 作    者：崔龙凯11
// /////////////////////////////////////////


// /////////////////////////////////////////
// 生成数据操作层的代码 开始
// /////////////////////////////////////////

const mysql = require('mysql');
const pool = mysql.createPool({ host: 'localhost', user: 'root', password: 'root', database: 'db11' });

//查询表中所有数据
function _selectAll(callback, table) {
    pool.query(`call select_all(${table})`, function (err, res) {
        callback(res);
    });
};
function selectAll(callback, table) {
    return __selectAll(callback, table);
}

//插入一条数据
function _insertOne(callback, table, value) {
    pool.query(`call insert_one(${table}, ${value})`, function (err, res) {
        callback(res);
    });
};
function insertOne(callback, table, value) {
    return _insertOne(callback, table, value);
}

//删除一条数据
function _deleteOne(callback, table, mywhere) {
    pool.query(`call delete_one(${table},${mywhere})`, function (err, res) {
        callback(res);
    });
};
function deleteOne(callback, table, mywhere) {
    return _deleteOne(callback, table, mywhere);
}

//更新一条数据
function _updateOne(callback, table, myset, mywhere) {
    pool.query(`call updateOne_one(${table}, ${myset}, ${mywhere})`, function (err, res) {
        callback(res);
    });
};
function updateOne(callback, table, myset, mywhere) {
    return _updateOne(callback, table, myset, mywhere);
}

module.exports = {
    selectAll,
    insertOne,
    deleteOne,
    updateOne
};

// /////////////////////////////////////////
// 生成数据操作层的代码 结束
// /////////////////////////////////////////

