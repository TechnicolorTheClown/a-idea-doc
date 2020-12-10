# 一 数据定义
# 1 数据库模式定义

包含数据库的创建、选择、修改、删除、查看等操作

## 1.1 创建数据库

```
CREATE DATABASE 数据库名;

//例子
CREATE DATABASE db_name;
```

## 1.2 选择数据库 

```
use 数据库名;

//例子
use db_name;
```

## 1.3 修改数据库 

```
SHOW CREATE DATABASE test_db; //查看 test_db 数据库的定义声明的执行结果如下所示：

+----------+--------------------------------------------------------+
| Database | Create Database                                        |
+----------+--------------------------------------------------------+
| test_db  | CREATE DATABASE `test_db` /*!40100 DEFAULT CHARACTER SET utf8 */|
+----------+--------------------------------------------------------+


//使用命令行工具将数据库 test_db 的指定字符集修改为 gb2312，默认校对规则修改为 //utf8_unicode_ci，输入 SQL 语句与执行结果如下所示：
CREATE DATABASE test_db
DEFAULT CHARACTER SET gb2312
DEFAULT COLLATE gb2312_chinese_ci;


 SHOW CREATE DATABASE test_db;
+----------+--------------------------------------------------------+
| Database | Create Database                                        |
+----------+--------------------------------------------------------+
| test_db  | CREATE DATABASE `test_db` /*!40100 DEFAULT CHARACTER SET gb2312 */|
+----------+--------------------------------------------------------+
```

## 1.4 删除数据库

```
drop database &lt;数据库名&gt;;

//例子
drop database db_name;
```

## 1.5 查看数据库

```
SHOW DATABASES [LIKE '数据库名'];

SHOW DATABASES; //列出当前用户可查看的所有数据库：

SHOW DATABASES LIKE '数据库名'; //使用 LIKE 从句，查看与 test_db 完全匹配的数据库：

SHOW DATABASES LIKE '%test%'; //使用 LIKE 从句，查看名字中包含 test 的数据库：

SHOW DATABASES LIKE 'db%'; //使用 LIKE 从句，查看名字以 db 开头的数据库：

SHOW DATABASES LIKE '%db';//使用 LIKE 从句，查看名字以 db 结尾的数据库：

```

# 2 表定义

成功创建数据库之后，才能在数据库中创建数据表。

数据表被定义为字段的集合，数据在表中是按照行和列的格式来存储的，每一行代表一条记录。每一列代表记录中的一个自动的取值。

 

## 2.1 创建表

```
//使用 CREATE TABLE 语句创建表。其语法格式为：
CREATE TABLE &lt;表名&gt; ([表定义选项])[表选项][分区选项];

【实例】创建员工表 tb_emp1，结构如下表所示。

字段名称	  数据类型	     备注
id	      INT(ll)	    员工编号
name	  VARCHAR(25)	员工名称
deptld	  INT(ll)	    所在部门编号
salary	  FLOAT	        工资

CREATE TABLE tb_emp1
 (
   id INT(11),
   name VARCHAR(25),
   deptId INT(11),
   salary FLOAT
 );


```

## 2.2 更新表

```
ALTER TABLE &lt;表名&gt; [修改选项]

修改选项的语法格式如下：
{ ADD COLUMN &lt;列名&gt; &lt;类型&gt;
| CHANGE COLUMN &lt;旧列名&gt; &lt;新列名&gt; &lt;新列类型&gt;
| ALTER COLUMN &lt;列名&gt; { SET DEFAULT &lt;默认值&gt; | DROP DEFAULT }
| MODIFY COLUMN &lt;列名&gt; &lt;类型&gt;
| DROP COLUMN &lt;列名&gt;
| RENAME TO &lt;新表名&gt; }

【实例 1】使用 ALTER TABLE 修改表 tb_emp1 的结构，在表的第一列添加一个 int 类型的字段 col1

ALTER TABLE tb_emp1
ADD COLUMN col1 INT FIRST;

DESC tb_emp1;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| col1   | int(11)     | YES  |     | NULL    |       |
| id     | int(11)     | YES  |     | NULL    |       |
| name   | varchar(25) | YES  |     | NULL    |       |
| deptId | int(11)     | YES  |     | NULL    |       |
| salary | float       | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+

【实例 2】使用 ALTER TABLE 修改表 tb_emp1 的结构，在一列 name 后添加一个 int 类型的字段 col2

ALTER TABLE tb_emp1
ADD COLUMN col2 INT AFTER name;

+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| col1   | int(11)     | YES  |     | NULL    |       |
| id     | int(11)     | YES  |     | NULL    |       |
| name   | varchar(25) | YES  |     | NULL    |       |
| col2   | int(11)     | YES  |     | NULL    |       |
| deptId | int(11)     | YES  |     | NULL    |       |
| salary | float        | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+
```

## 2.3 重命名表

```
ALTER TABLE &lt;旧表名&gt; RENAME [TO] &lt;新表名&gt;；

【实例 6】使用 ALTER TABLE 将数据表 tb_emp1 改名为 tb_emp2

ALTER TABLE tb_emp1
RENAME TO tb_emp2;
```

## 2.4 删除表

```
DROP TABLE [IF EXISTS] &lt;表名&gt; [ , &lt;表名1&gt; , &lt;表名2&gt;] …


【实例】删除数据表 tb_emp3

DROP TABLE tb_emp3;
```

## 2.5 查看表

```
show 表名称;//查看表

【例子】
show tables;

【例子】
show tables like '%user%';//模糊查询包含user的表

【例子】
desc sys_user;//查看列, 查看sys_user表信息
```

# 3 索引定义

MySQL索引的建立对于MySQL的高效运行是很重要的，索引可以大大提高MySQL的检索速度。打个比方，如果合理的设计且使用索引的MySQL是一辆兰博基尼的话，那么没有设计和使用索引的MySQL就是一个人力三轮车。拿汉语字典的目录页（索引）打比方，我们可以按拼音、笔画、偏旁部首等排序的目录（索引）快速查找到需要的字。索引分单列索引和组合索引。单列索引，即一个索引只包含单个列，一个表可以有多个单列索引，但这不是组合索引。组合索引，即一个索引包含多个列。创建索引时，你需要确保该索引是应用在 SQL 查询语句的条件(一般作为 WHERE 子句的条件)。实际上，索引也是一张表，该表保存了主键与索引字段，并指向实体表的记录。上面都在说使用索引的好处，但过多的使用索引将会造成滥用。因此索引也会有它的缺点：虽然索引大大提高了查询速度，同时却会降低更新表的速度，如对表进行INSERT、UPDATE和DELETE。因为更新表时，MySQL不仅要保存数据，还要保存一下索引文件。

建立索引会占用磁盘空间的索引文件。   

### 索引类型
- **UNIQUE**(**唯一索引**)：不可以出现相同的值，可以有NULL值；- **INDEX**(**普通索引**)：允许出现相同的索引内容；- **PROMARY KEY**(**主键索引**)：不允许出现相同的值；- **fulltext index**(**全文索引**)：可以针对值中的某个单词，但效率确实不敢恭维；- **组合索引**：实质上是将多个字段建到一个索引里，列值的组合必须唯一；
                   

                                                                                                            原文地址:

## 3.1 索引的创建 

语法说明如下：
- `&lt;索引名&gt;`：指定索引名。一个表可以创建多个索引，但每个索引在该表中的名称是唯一的。- `&lt;表名&gt;`：指定要创建索引的表名。- `&lt;列名&gt;`：指定要创建索引的列名。通常可以考虑将查询语句中在 JOIN 子句和 WHERE 子句里经常出现的列作为索引列。- `&lt;长度&gt;`：可选项。指定使用列前的 length 个字符来创建索引。使用列的一部分创建索引有利于减小索引文件的大小，节省索引列所占的空间。在某些情况下，只能对列的前缀进行索引。索引列的长度有一个最大上限 255 个字节（MyISAM 和 InnoDB 表的最大上限为 1000 个字节），如果索引列的长度超过了这个上限，就只能用列的前缀进行索引。另外，BLOB 或 TEXT 类型的列也必须使用前缀索引。- `ASC|DESC`：可选项。`ASC`指定索引按照升序来排列，`DESC`指定索引按照降序来排列，默认为`ASC`。
```
CREATE &lt;索引名&gt; ON &lt;表名&gt; (&lt;列名&gt; [&lt;长度&gt;] [ ASC | DESC])

索引也可以在创建表（CREATE TABLE）的同时创建。在 CREATE TABLE 语句中添加以下语句。语法格式：
CONSTRAINT PRIMARY KEY [索引类型] (&lt;列名&gt;,…)

CREATE INDEX indexName ON mytable(username(length)); 


创建一般索引
【实例 1】创建一个表 tb_stu_info，在该表的 height 字段创建一般索引。输入的 SQL 语句和执行过程如下所示。

 CREATE TABLE tb_stu_info
(
 id INT NOT NULL,
 name CHAR(45) DEFAULT NULL,
 dept_id INT DEFAULT NULL,
 age INT DEFAULT NULL,
 height INT DEFAULT NULL,
 INDEX(height)
);

创建唯一索引
【实例 2】创建一个表 tb_stu_info2，在该表的 id 字段上使用 UNIQUE 关键字创建唯一索引。输入的 SQL 语句和执行过程如下所示。

CREATE TABLE tb_stu_info2
     (
       id INT NOT NULL,
       name CHAR(45) DEFAULT NULL,
       dept_id INT DEFAULT NULL,
       age INT DEFAULT NULL,
       height INT DEFAULT NULL,
       UNIQUE INDEX(height)
     );
```

## 3.2 索引的查看

 

语法说明如下：
- `&lt;表名&gt;`：要显示索引的表。- `&lt;数据库名&gt;`：要显示的表所在的数据库。
 

显示数据库 mytest 的表 course 的索引情况。

```
SHOW INDEX FROM &lt;表名&gt; [ FROM &lt;数据库名&gt;

【实例 3】使用 SHOW INDEX 语句查看表 tb_stu_info2 的索引信息，输入的 SQL 语句和执行结果如下所示。]
```

##  

该语句会返回一张结果表，该表有如下几个字段，每个字段所显示的内容说明如下。
- Table：表的名称。- Non_unique：用于显示该索引是否是唯一索引。若不是唯一索引，则该列的值显示为 1；若是唯一索引，则该列的值显示为 0。- Key_name：索引的名称。- Seq_in_index：索引中的列序列号，从 1 开始计数。- Column_name：列名称。- Collation：显示列以何种顺序存储在索引中。在 MySQL 中，升序显示值“A”（升序），若显示为 NULL，则表示无分类。- Cardinality：显示索引中唯一值数目的估计值。基数根据被存储为整数的统计数据计数，所以即使对于小型表，该值也没有必要是精确的。基数越大，当进行联合时，MySQL 使用该索引的机会就越大。- Sub_part：若列只是被部分编入索引，则为被编入索引的字符的数目。若整列被编入索引，则为 NULL。- Packed：指示关键字如何被压缩。若没有被压缩，则为 NULL。- Null：用于显示索引列中是否包含 NULL。若列含有 NULL，则显示为 YES。若没有，则该列显示为 NO。- Index_type：显示索引使用的类型和方法（BTREE、FULLTEXT、HASH、RTREE）。- Comment：显示评注。
 

## 3.3 索引的删除

删除索引可以使用**ALTER TABLE**或**DROP INDEX**语句来实现

```
drop index index_name on table_name ;

alter table table_name drop index index_name ;

alter table table_name drop primary key ;
```

在前面的两条语句中，都删除了table_name中的索引index_name。而在最后一条语句中，只在删除PRIMARY KEY索引中使用，因为**一个表只可能有一个PRIMARY KEY索引**，因此不需要指定索引名。如果没有创建PRIMARY KEY索引，但表具有一个或多个UNIQUE索引，则MySQL将删除第一个UNIQUE索引。

      如果从表中删除某列，则索引会受影响。对于多列组合的索引，如果删除其中的某列，则该列也会从索引中删除。如果删除组成索引的所有列，则整个索引将被删除。

# 4 数据更新

 

## 4.1 插入数据

```

INSERT INTO 表名 ( field1, field2,...fieldN ) VALUES ( value1, value2,...valueN );
```

## 4.2 删除数据

```

delete from 表名 where 删除条件;
```

## 4.3 修改数据

```

UPDATE 表名 SET title='学习' WHERE 条件;
```

 
