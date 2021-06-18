// /////////////////////////////////////////
// 文件名：createSp.sql
// 说    明：生成存储过程语句的代码
// 数据库名：db11
// 表    名：通用
// 作    者：崔龙凯11
// /////////////////////////////////////////


// /////////////////////////////////////////
// 生成删除一条记录的存储过程 开始
// /////////////////////////////////////////
DELIMITER //
create procedure delete_one(in mytable varchar(255),in mywhere varchar(255))
	begin
		set @sqlStmt = concat('delete from ',mytable,' where ',mywhere ,';');
        prepare stmt from @sqlStmt;
        execute stmt;
	end//
DELIMITER ;
// /////////////////////////////////////////
// 生成删除一条记录的存储过程 结束
// /////////////////////////////////////////

    
// /////////////////////////////////////////
// 生成更新一条记录的存储过程 开始
// /////////////////////////////////////////
DELIMITER //
create procedure update_one(in mytable varchar(255),in myset varchar(255),in mywhere varchar(255))
	begin
		set @sqlStmt = concat('update ',mytable, ' set ' , myset,' where ',mywhere ,';');
        prepare stmt from @sqlStmt;
        execute stmt;
	end//
DELIMITER ;
// /////////////////////////////////////////
// 生成更新一条记录的存储过程 结束
// /////////////////////////////////////////

    
// /////////////////////////////////////////
// 生成插入一条记录的存储过程 开始
// /////////////////////////////////////////
DELIMITER //
create procedure insert_one(in mytable varchar(255),in myvalues varchar(255))
	begin
		set @sqlStmt = concat('insert into ',mytable, ' values(' , myvalues,')');
        prepare stmt from @sqlStmt;
        execute stmt;		
	end//
DELIMITER ;
// /////////////////////////////////////////
// 生成插入一条记录的存储过程 结束
// /////////////////////////////////////////

    
// /////////////////////////////////////////
// 生成查询所有记录的存储过程 开始
// /////////////////////////////////////////
DELIMITER //
create procedure select_all(in mytable varchar(255))
	begin
		set @sqlStmt = concat('select * from ',mytable,' ;');
        prepare stmt from @sqlStmt;
        execute stmt;
	end//
DELIMITER ;
// /////////////////////////////////////////
// 生成查询所有记录的存储过程 结束
// /////////////////////////////////////////

    