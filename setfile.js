const fs = require('fs');
const path = require('path');
const connMysql = require('./connMysql.js');

//创建存储过程脚本的头部注释
function headAnnotation(fileName, describe, database, table) {
    let headStr =
        `// /////////////////////////////////////////
// 文件名：${fileName}
// 说    明：${describe}
// 数据库名：${database}
// 表    名：${table}
// 作    者：崔龙凯11
// /////////////////////////////////////////

`;
    fs.writeFile(__dirname + `/createJS/${fileName}`, headStr, 'utf8', function (err) {
        return console.log(err);
    });
}

//生成main部分的部分
function createCode(fileName, res) {
    let codeStr =
        `
// /////////////////////////////////////////
// ${res.describe} 开始
// /////////////////////////////////////////
${res.main}
// /////////////////////////////////////////
// ${res.describe} 结束
// /////////////////////////////////////////

    `;
    fs.appendFile(__dirname + `/createJS/${fileName}`, codeStr, 'utf8', function (err) {
        return console.log(err);
    });
}

//生成异步的 部分
function createAsyn(fileName, table) {
    return {
        //生成实体类 部分
        createClass: connMysql.getItems(function (this_items, str) {
            let strClass = `
// /////////////////////////////////////////
// 生成${table}的实体类 开始
// /////////////////////////////////////////
class table11 {
    constructor(${str}) {
${this_items}
    }
}
// /////////////////////////////////////////
// 生成${table}的实体类 结束
// /////////////////////////////////////////
`;
            fs.appendFile(__dirname + `/createJS/${fileName}`, strClass, 'utf8', function (err) {
                return console.log(err);
            });
        }),
    };

}


module.exports = {
    headAnnotation,
    createCode,
    createAsyn
};