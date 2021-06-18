// /////////////////////////////////////////
// 文件名：createService.js
// 说    明：生成业务逻辑类的代码
// 数据库名：db11
// 表    名：通用
// 作    者：崔龙凯11
// /////////////////////////////////////////


// /////////////////////////////////////////
// 生成业务逻辑层代码 开始
// /////////////////////////////////////////

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
    
// /////////////////////////////////////////
// 生成业务逻辑层代码 结束
// /////////////////////////////////////////

    