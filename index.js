const setfile = require('./setfile.js');
const createMain = require('./createMain');
const connMyql = require('./connMysql');

//数据库基本配置
let host = '127.0.0.1';
let username = 'root';
let password = 'root';
let database = 'db11';

//filename
//生成存储过程
let createSp = 'createSp.sql';
//数据操作层
let createDao = 'createDao.js';
//业务逻辑层
let createService = 'createService.js';

let stu = {
    id: 1,
    name: 'name',
    sex: 'man',
    year: 18
};

//创建存储过程脚本
setfile.headAnnotation(createSp, '生成存储过程语句的代码', database, '通用');
setfile.createCode(createSp, createMain.insetOneSql());
setfile.createCode(createSp, createMain.deleteOneSql());
setfile.createCode(createSp, createMain.updateOneSql());
setfile.createCode(createSp, createMain.selectAllSql());


//首先获取所有表的表名
connMyql.getTable(function (tables) {
    //生成实体类的部分
    for (let i = 0; i < tables.length; i++) {
        setfile.headAnnotation(`${tables[i]}.js`, '生成实体类语句的代码', database, tables[i]);
        setfile.createAsyn(`${tables[i]}.js`, tables[i]).ccreateClass;
    }
});

//创建数据操作层
setfile.headAnnotation(createDao, '生成数据操作的代码', database, '通用');
setfile.createCode(createDao, createMain.createDao());

//创建业务逻辑层
setfile.headAnnotation(createService, '生成业务逻辑类的代码', database, '通用');
setfile.createCode(createService, createMain.createService());










