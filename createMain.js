//生成查询所有记录的存储过程
function selectAllSql() {
    let res = {};
    res.describe = '生成查询所有记录的存储过程';
    res.main =
        `DELIMITER //
create procedure select_all(in mytable varchar(255))
	begin
		set @sqlStmt = concat('select * from ',mytable,' ;');
        prepare stmt from @sqlStmt;
        execute stmt;
	end//
DELIMITER ;`;
    return res;
}


//生成插入一条记录的存储过程
function insetOneSql() {
    let res = {};
    res.describe = '生成插入一条记录的存储过程';
    res.main =
        `DELIMITER //
create procedure insert_one(in mytable varchar(255),in myvalues varchar(255))
	begin
		set @sqlStmt = concat('insert into ',mytable, ' values(' , myvalues,')');
        prepare stmt from @sqlStmt;
        execute stmt;		
	end//
DELIMITER ;`;
    return res;
}


//生成更新一条数据的存储过程
function updateOneSql() {
    let res = {};
    res.describe = '生成更新一条记录的存储过程';
    res.main =
        `DELIMITER //
create procedure update_one(in mytable varchar(255),in myset varchar(255),in mywhere varchar(255))
	begin
		set @sqlStmt = concat('update ',mytable, ' set ' , myset,' where ',mywhere ,';');
        prepare stmt from @sqlStmt;
        execute stmt;
	end//
DELIMITER ;`;
    return res;
}


//生成删除一条数据的存储过程
function deleteOneSql() {
    let res = {};
    res.describe = '生成删除一条记录的存储过程';
    res.main =
        `DELIMITER //
create procedure delete_one(in mytable varchar(255),in mywhere varchar(255))
	begin
		set @sqlStmt = concat('delete from ',mytable,' where ',mywhere ,';');
        prepare stmt from @sqlStmt;
        execute stmt;
	end//
DELIMITER ;`;
    return res;
}


//生成数据操作层代码
function createDao() {
    let res = {};
    res.describe = '生成数据操作层的代码';
    res.main = `
const mysql = require('mysql');
const pool = mysql.createPool({ host: 'localhost', user: 'root', password: 'root', database: 'db11' });

//查询表中所有数据
function _selectAll(callback, table) {
    pool.query(\`call select_all(\${table})\`, function (err, res) {
        callback(res);
    });
};
function selectAll(callback, table) {
    return __selectAll(callback, table);
}

//插入一条数据
function _insertOne(callback, table, value) {
    pool.query(\`call insert_one(\${ table }, \${ value })\`, function (err, res) {
        callback(res);
    });
};
function insertOne(callback, table, valuek) {
    return _insertOne(callback, table, value);
}

//删除一条数据
function _deleteOne(callback, table, mywhere) {
    pool.query(\`call delete_one(\${ table },\${ mywhere })\`, function (err, res) {
        callback(res);
    });
};
function deleteOne(callback, table, mywhere) {
    return _deleteOne(callback, table, mywhere);
}

//更新一条数据
function _updateOne(callback, table, myset, mywhere) {
    pool.query(\`call updateOne_one(\${ table }, \${ myset }, \${ mywhere })\`, function (err, res) {
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
`;
    return res;
}


//生成业务逻辑层的代码
function createService() {
    let res = {};
    res.describe = '生成业务逻辑层代码';
    res.main = `
const dao = require('createDao.js');

// 查询表中所有元素
function selectAll(callback, table) {
    return dao.selectAll(callback, table);
};

// 插入一条数据
function insetOne(callback, table, value) {
    return dao.insetOne(callback, table, value);
};

// 删除一条数据
function deleteOne(callback, table, mywhere) {
    return dao.deleteOne(callback, table, mywhere);
};

// 修改一条数据
function updateOne(callback, table, myset, mywhere) {
    return dao.updateOne(callback, table, myset, mywhere);
};

module.exports = {
    selectAll,
    insetOne,
    deleteOne,
    updateOne
};
    `;
    return res;
}




module.exports = {
    insetOneSql,
    deleteOneSql,
    updateOneSql,
    selectAllSql,
    createDao,
    createService

};;