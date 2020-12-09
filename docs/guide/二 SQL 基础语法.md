# 二 SQL 基础语法
# 1 SELECT

`SELECT`语句由以下列表中所述的几个子句组成：
- `SELECT`之后是逗号分隔列或星号(`*`)的列表，表示要返回所有列。- `FROM`指定要查询数据的表或视图。- `JOIN`根据某些连接条件从其他表中获取数据。- `WHERE`过滤结果集中的行。- `GROUP BY`将一组行组合成小分组，并对每个小分组应用聚合函数。- `HAVING`过滤器基于`GROUP BY`子句定义的小分组。- `ORDER BY`指定用于排序的列的列表。- `LIMIT`限制返回行的数量。
```
SELECT
&lt;字段列名&gt;
FROM &lt;表 1&gt;, &lt;表 2&gt;…
WHERE &lt;表达式&gt;
GROUP BY &lt;group by definition&gt;
HAVING &lt;expression&gt; [{&lt;operator&gt; &lt;expression&gt;}…]]
ORDER BY &lt;order by definition&gt;
LIMIT[&lt;offset&gt;,] &lt;row count&gt;

```

## 1.1 列的选择与指定

### 1.1.1 选择指定的列

```
select 列 from 表名
```

### 1.1.2 定义并使用列的别名

```
select A列 A列别名，B列 B列别名 from 表名
```

### 1.1.3 替换查询结果集中的数据

```
select 

case 
 where 条件1 then 表达式1
 where 条件2 then 表达式2

else 表达式
end 列名称

from 表名
```

### 1.1.4 计算列值

```
select

列作计算

from 表名
```

### 1.1.5 聚合函数

|函数名称|作用
|------
|MAX(column)|某列的最低值（有则不会返回NULL，没有则返回NULL）
|MIN(column)|某列的最高值（没有则返回NULL）
|COUNT(column)|某列的行数（不包括 NULL 值）
|COUNT(*)|被选列行数（包括NULL）
|SUM(column)|和
|AVG(column)|平均值

# 2 FROM

## 2.1子句与多表连接查询

连接查询：将多张表连到一起进行查询（会导致记录数行和字段数列发生改变）

t_student学生表：scid、sname、cid

<img alt="" class="has" height="115" src="https://img-blog.csdnimg.cn/2019091119242917.PNG" width="246">

t_clazz班级表：cid、cname

<img alt="" class="has" height="78" src="https://img-blog.csdnimg.cn/20190911192433447.PNG" width="217">

### 2.1.1 交叉连接

**交叉连接：**将两张表的数据与另外一张表彼此交叉

**原理**
1.  从第一张表依次取出每一条记录1.  取出每一条记录之后，与另外一张表的全部记录挨个匹配1.  没有任何匹配条件，所有的结果都会进行保留1.  记录数 = 第一张表记录数 * 第二张表记录数；字段数 = 第一张表字段数  + 第二张表字段数（笛卡尔积）
**语法** 基本语法：表1 cross join 表2;

**应用** 交叉连接产生的结果是笛卡尔积，没有实际应用。

交叉连接结果是笛卡尔积

左表的每条记录与右表的每条记录连接

```
SELECT * FROM t_student CROSS JOIN t_clazz ;
```

结果：15条记录

<img alt="" class="has" height="294" src="https://img-blog.csdnimg.cn/20190911191126974.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0x1Y2tfWlo=,size_16,color_FFFFFF,t_70" width="435">

### 2.1.2 内连接

**内连接：**inner join，从一张表中取出所有的记录去另外一张表中匹配：利用匹配条件进行匹配，成功了则保留，失败了放弃。

**原理** 1、 从第一张表中取出一条记录，然后去另外一张表中进行匹配

2、 利用匹配条件进行匹配：

2.1 匹配到：保留，继续向下匹配

2.2 匹配失败：向下继续，如果全表匹配失败，结束

**语法** 基本语法：表1 [inner] join 表2 on 匹配条件;
1. 如果内连接没有条件（允许），那么其实就是交叉连接（避免）1. 使用匹配条件进行匹配1. 因为表的设计通常容易产生同名字段，尤其是ID，所以为了避免重名出现错误，通常使用表名.字段名，来确保唯一性1. 通常，如果条件中使用到对应的表名，而表名通常比较长，所以可以通过表别名来简化1. 内连接匹配的时候，必须保证匹配到才会保存1. 内连接因为不强制必须使用匹配条件（on）因此可以在数据匹配完成之后，使用where条件来限制，效果与on一样（建议使用on）
**应用** 内连接通常是在对数据有精确要求的地方使用：必须保证两种表中都能进行数据匹配。

查询出两个表的共同部分

（笛卡尔积满足on条件的部分）

```
SELECT * FROM t_student s INNER JOIN t_clazz c ON s.`cid`=c.`cid`;
```

结果：4条记录

<img alt="" class="has" height="95" src="https://img-blog.csdnimg.cn/20190911192109751.PNG" width="391">

### 2.1.3 外连接

**外链接：**outer join，按照某一张表作为主表（表中所有记录在最后都会保留），根据条件去连接另外一张表，从而得到目标数据。

**外连接分为两种：**左外连接（left join），右外连接（right join）

**左连接：**左表是主表

**右连接：**右表是主表

**原理**
1. 确定连接主表：左连接就是left join左边的表为主表；right join就是右边为主表1. 拿主表的每一条记录，去匹配另外一张表（从表）的每一条记录1. 如果满足匹配条件：保留；不满足即不保留1. 如果主表记录在从表中一条都没有匹配成功，那么也要保留该记录：从表对应的字段值都未NULL
**语法** 基本语法：

左连接：主表 left join 从表 on 连接条件;

右连接：从表 right join 主表 on连接条件;

左连接对应的主表数据在左边；右连接对应的主表数据在右边：

**特点**
1. 外连接中主表数据记录一定会保存：连接之后不会出现记录数少于主表（内连接可能）1. 左连接和右连接其实可以互相转换，但是数据对应的位置（表顺序）会改变
**应用** 非常常用的一种获取的数据方式：作为数据获取对应主表以及其他数据（关联）

### 2.1.4 **左外连接**

查询出两个表的共同部分+属于左表不属于右表部分

```
SELECT * FROM t_student s LEFT JOIN t_clazz c ON s.`cid`=c.`cid`;
```

结果：5条记录

<img alt="" class="has" height="113" src="https://img-blog.csdnimg.cn/20190911192249863.PNG" width="390">

### 2.1.5 右外连接

查询出两个表的共同部分+属于右表不属于左表部分

```
SELECT * FROM t_student s RIGHT JOIN t_clazz c ON s.`cid`=c.`cid`;
```

结果：5条记录

<img alt="" class="has" height="113" src="https://img-blog.csdnimg.cn/20190911192318208.PNG" width="437">

 

# 3 where

我们知道从 MySQL 表中使用 SQL SELECT 语句来读取数据。

如需有条件地从表中选取数据，可将 WHERE 子句添加到 SELECT 语句中。

### 语法

以下是 SQL SELECT 语句使用 WHERE 子句从数据表中读取数据的通用语法：

```
SELECT field1, field2,...fieldN FROM table_name1, table_name2...
[WHERE condition1 [AND [OR]] condition2.....
```

## 3.1 比较运算
<td style="vertical-align:top;"> 符号 </td><td style="vertical-align:top;"> 形式 </td><td style="vertical-align:top;"> 作用 </td>

形式
<td style="vertical-align:top;"> = </td><td style="vertical-align:top;"> X1=X2 </td><td style="vertical-align:top;"> 判断是否相等 </td>

X1=X2
<td style="vertical-align:top;"> &lt;&gt;或!= </td><td style="vertical-align:top;"> X1&lt;&gt;X2或 X1!=X2 </td><td style="vertical-align:top;"> 判断是否不相等 </td>

X1&lt;&gt;X2或 X1!=X2
<td style="vertical-align:top;"> &lt;=&gt; </td><td style="vertical-align:top;"> X1&lt;=&gt;X2 </td><td style="vertical-align:top;"> 判断是否相等，可以判断是否相等NULL </td>

X1&lt;=&gt;X2
<td style="vertical-align:top;"> &gt;、&gt;= </td><td style="vertical-align:top;"> X1&gt;X2 、X1&gt;=X2 </td><td style="vertical-align:top;"> 判断是否大于等于 </td>

X1&gt;X2 、X1&gt;=X2
<td style="vertical-align:top;"> &lt;、&lt;= </td><td style="vertical-align:top;"> X1&lt;X2 、X1&lt;=X2 </td><td style="vertical-align:top;"> 判断是否小于等于 </td>

X1&lt;X2 、X1&lt;=X2

 

```
SELECT * FROM mytable
WHERE col &gt; 4
```

## 3.2 判断范围
<td style="vertical-align:top;"> 符号 </td><td style="vertical-align:top;"> 形式 </td><td style="vertical-align:top;"> 作用 </td>

形式
<td style="vertical-align:top;"> BETWEEN AND或 NOT BETWEEN </td><td style="vertical-align:top;"> X1 BETWEEN m AND n </td><td style="vertical-align:top;"> 判断是否在范围内 </td>

NOT BETWEEN

AND n
<td style="vertical-align:top;"> IN 或NOT IN </td><td style="vertical-align:top;"> X1 IN(值1…) </td><td style="vertical-align:top;"> 判断是否在，某一个固定范围内 </td>

X1 IN(值1…)

 

```
SELECT * FROM mytable
WHERE col = 2 and col = 3
```

## 3.3 判断空值
<td style="vertical-align:top;"> 符号 </td><td style="vertical-align:top;"> 形式 </td><td style="vertical-align:top;"> 作用 </td>

形式
<td style="vertical-align:top;"> IS NULL或IS NOT  NULL </td><td style="vertical-align:top;"> X1 IS NULL X1 IS NOT NULL </td><td style="vertical-align:top;"> 判断是否等于NULL </td>

 NULL

X1 IS NOT NULL

 

```
SELECT * FROM mytable
WHERE col is null
```

## 3.4 子查询

### 3.**4.1 IN 范围查询**

结合关键字 IN 所使用的子查询主要用于判断一个给定值是否存在于子查询的结果集中。其语法格式为：

```
SELECT * FROM mytable
WHERE col IN(2,3,4)

SELECT * FROM mytable
WHERE col NOT IN(2,3,4)

&lt;表达式&gt; [NOT] IN &lt;子查询&gt;
```

语法说明如下。
- `&lt;表达式&gt;`：用于指定表达式。当表达式与子查询返回的结果集中的某个值相等时，返回 TRUE，否则返回 FALSE；若使用关键字 NOT，则返回的值正好相反。- `&lt;子查询&gt;`：用于指定子查询。这里的子查询只能返回一列数据。对于比较复杂的查询要求，可以使用 SELECT 语句实现子查询的多层嵌套。
### 3.**4.2  ALL | SOME | ANY 比较运算符 子查询**

比较运算符所使用的子查询主要用于对表达式的值和子查询返回的值进行比较运算。其语法格式为：

```
SELECT * FROM mytable 
WHERE col  &gt;= ALL(SELECT col  FROM mytableWHERE  WHERE type = 4)


&lt;表达式&gt; {= | &lt; | &gt; | &gt;= | &lt;= | &lt;=&gt; | &lt; &gt; | != }
{ ALL | SOME | ANY} &lt;子查询&gt;


```

语法说明如下。
- `&lt;子查询&gt;`：用于指定子查询。- `&lt;表达式&gt;`：用于指定要进行比较的表达式。<li>`ALL`、`SOME` 和 `ANY`：可选项。用于指定对比较运算的限制。其中， 
  <ul>- ALL 用于指定表达式需要与子查询结果集中的每个值都进行比较，当表达式与每个值都满足比较关系时，会返回 TRUE，否则返回 FALSE- SOME 和 ANY 是同义词，表示表达式只要与子查询结果集中的某个值满足比较关系，就返回 TRUE，否则返回 FALSE。
### **3.4.3 EXIST子查询**

关键字 EXIST 所使用的子查询主要用于判断子查询的结果集是否为空。其语法格式为：EXIST &lt;子查询&gt;

若子查询的结果集不为空，则返回 TRUE；否则返回 FALSE。

# 4 创建表、修改表、插入表、更新、删除

## 4.1 创建表

```
CREATE TABLE mytable (
  # int 类型，不为空，自增
  id INT NOT NULL AUTO_INCREMENT,
  # int 类型，不可为空，默认值为 1，不为空
  col1 INT NOT NULL DEFAULT 1,
  # 变长字符串类型，最长为 45 个字符，可以为空
  col2 VARCHAR(45) NULL,
  # 日期类型，可为空
  col3 DATE NULL,
  # 设置主键为 id
  PRIMARY KEY (`id`));
```

## 4.2 修改表

### 4.2.1 添加列

```
ALTER TABLE mytable
ADD col CHAR(20);
```

### 4.2.2 删除列

```
ALTER TABLE mytable
DROP COLUMN col;
```

### 4.2.3 删除表

```
DROP TABLE mytable;
```

## 4.3 插入

### 4.3.1 普通插入

```
INSERT INTO mytable(col1, col2)
VALUES(val1, val2);
```

### 4.3.2 插入检索出来的数据

```
INSERT INTO mytable1(col1, col2)
SELECT col1, col2
FROM mytable2;
```

### 4.3.3 将一个表的内容插入到一个新表

```
CREATE TABLE newtable AS
SELECT * FROM mytable;
```

## 4.4 更新

```
UPDATE mytable
SET col = val
WHERE id = 1;
```

## 4.5 删除

```
DELETE FROM mytable
WHERE id = 1;
```

**TRUNCATE TABLE** 可以清空表，也就是删除所有行。

```
TRUNCATE TABLE mytable;
```

使用更新和删除操作时一定要用 WHERE 子句，不然会把整张表的数据都破坏。可以先用 SELECT 语句进行测试，防止错误删除

# 5 分组数据

## 5.1 GROUP BY 字段或者表达式分组

**group by:**对select查询出来的结果集按照某个字段或者表达式进行分组，获得一组组的集合，然后从每组中取出一个指定字段或者表达式的值。

把具有相同的数据值的行放在同一组中。

可以对同一分组数据使用汇总函数进行处理，例如求分组数据的平均值等。

指定的分组字段除了能按该字段进行分组，也会自动按该字段进行排序。

```
SELECT col, COUNT(*) AS num
FROM mytable
GROUP BY col;
```

## **5.2 WHVING ****过滤行****分组**

**having：**用于对where和group by查询出来的分组经行过滤，查出满足条件的分组结果。它是一个过滤声明，是在查询返回结果集以后对查询结果进行的过滤操作。

WHERE 过滤行，HAVING 过滤分组，行过滤应当先于分组过滤。

```
SELECT col, COUNT(*) AS num
FROM mytable
WHERE col &gt; 2
GROUP BY col
HAVING num &gt;= 2;
```

## 5.3 ORDER BY 分组排序

GROUP BY 自动按分组字段进行排序，ORDER BY 也可以按汇总字段来进行排序。

```
SELECT col, COUNT(*) AS num
FROM mytable
GROUP BY col
ORDER BY num;
```

## 分组规定
- GROUP BY 子句出现在 WHERE 子句之后，ORDER BY 子句之前；- 除了汇总字段外，SELECT 语句中的每一字段都必须在 GROUP BY 子句中给出；- NULL 的行会单独分为一组；- 大多数 SQL 实现不支持 GROUP BY 列具有可变长度的数据类型。
# 6  查询限制

## 6.1 DISTINCT

相同值只会出现一次。它作用于所有列，也就是说所有列的值都相同才算相同。

```
SELECT DISTINCT col1, col2
FROM mytable;
```

## 6.2 LIMIT

限制返回的行数。可以有两个参数，第一个参数为起始行，从 0 开始；第二个参数为返回的总行数。

返回前 5 行：

```
SELECT *
FROM mytable
LIMIT 5;

SELECT *
FROM mytable
LIMIT 0, 5;
```

```
返回第 3 ~ 5 行：

```

```
SELECT *
FROM mytable
LIMIT 2, 3;

```

# 7 通配符

通配符也是用在过滤语句中，但它只能用于文本字段。

## **7.1 %** 

匹配 &gt;=0 个任意字符

**找出包含一个“a”的数据**

```
SELECT * FROM mytable col like '%a%'
```

**找出找出以“a”开头的数据**

```
SELECT * FROM mytable col like 'a%'
```

**找出找出以“aa”结尾的数据**

```
SELECT * FROM mytable col like '%aa'
```

## **7.2 _**

 匹配 ==1 个任意字符；

**找出包含正好5个字符的**

```
SELECT * FROM mytable col like '_____'
```

## **7.3 [ ]** 

可以匹配集合内的字符，例如 [ab] 将匹配字符 a 或者 b。用脱字符 ^ 可以对其进行否定，也就是不匹配集合内的字符。

使用 Like 来进行通配符匹配。

**不以 A 和 B 开头的任意文本**

```
SELECT *
FROM mytable
WHERE col LIKE '[^AB]%'
```

不要滥用通配符，通配符位于开头处匹配会非常慢。

# 8 计算字段

在数据库服务器上完成数据的转换和格式化的工作往往比客户端上快得多，并且转换和格式化后的数据量更少的话可以减少网络通信量。

计算字段通常需要使用 **AS** 来取别名，否则输出的时候字段名为计算表达式。

##  8.1 **AS 查询出来的字段重命名**

```
SELECT col1 * col2 AS alias
FROM mytable;
```

**CONCAT()** 用于连接两个字段。许多数据库会使用空格把一个值填充为列宽，因此连接的结果会出现一些不必要的空格，使用 **TRIM()** 可以去除首尾空格。

##  8.2 **CONCAT()**  连接两个字段 **TRIM()** 去除首尾空格

```
SELECT CONCAT(TRIM(col1), '(', TRIM(col2), ')') AS concat_col
FROM mytable;
```

# 9 函数

各个 DBMS 的函数都是不相同的，因此不可移植，以下主要是 MySQL 的函数。

### 汇总

|函 数|说 明
|------
|AVG()|返回某列的平均值
|COUNT()|返回某列的行数
|MAX()|返回某列的最大值
|MIN()|返回某列的最小值
|SUM()|返回某列值之和

AVG() 会忽略 NULL 行。

使用 DISTINCT 可以汇总不同的值。

```
SELECT AVG(DISTINCT col1) AS avg_col
FROM mytable;
```

### 文本处理

|函数|说明
|------
|LEFT()|左边的字符
|RIGHT()|右边的字符
|LOWER()|转换为小写字符
|UPPER()|转换为大写字符
|LTRIM()|去除左边的空格
|RTRIM()|去除右边的空格
|LENGTH()|长度
|SOUNDEX()|转换为语音值

其中， **SOUNDEX()** 可以将一个字符串转换为描述其语音表示的字母数字模式。

```
SELECT *
FROM mytable
WHERE SOUNDEX(col1) = SOUNDEX('apple')
```

# 10 日期和时间处理
- 日期格式：YYYY-MM-DD- 时间格式：HH:&lt;zero-width space&gt;MM:SS
|函 数|说 明
|------
|ADDDATE()|增加一个日期（天、周等）
|ADDTIME()|增加一个时间（时、分等）
|CURDATE()|返回当前日期
|CURTIME()|返回当前时间
|DATE()|返回日期时间的日期部分
|DATEDIFF()|计算两个日期之差
|DATE_ADD()|高度灵活的日期运算函数
|DATE_FORMAT()|返回一个格式化的日期或时间串
|DAY()|返回一个日期的天数部分
|DAYOFWEEK()|对于一个日期，返回对应的星期几
|HOUR()|返回一个时间的小时部分
|MINUTE()|返回一个时间的分钟部分
|MONTH()|返回一个日期的月份部分
|NOW()|返回当前日期和时间
|SECOND()|返回一个时间的秒部分
|TIME()|返回一个日期时间的时间部分
|YEAR()|返回一个日期的年份部分

```
SELECT NOW();

2018-4-14 20:25:11
```

# 11 数值处理

|函数|说明
|------
|SIN()|正弦
|COS()|余弦
|TAN()|正切
|ABS()|绝对值
|SQRT()|平方根
|MOD()|余数
|EXP()|指数
|PI()|圆周率
|RAND()|随机数

# 12 **UNION** 组合查询

使用 **UNION** 来组合两个查询，如果第一个查询返回 M 行，第二个查询返回 N 行，那么组合查询的结果一般为 M+N 行。

每个查询必须包含相同的列、表达式和聚集函数。

默认会去除相同行，如果需要保留相同行，使用 UNION ALL

只能包含一个 ORDER BY 子句，并且必须位于语句的最后。

```
SELECT col
FROM mytable
WHERE col = 1
UNION
SELECT col
FROM mytable
WHERE col =2;
```

# 13 视图

视图是虚拟的表，本身不包含数据，也就不能对其进行索引操作。

对视图的操作和对普通表的操作一样。

视图具有如下好处：
- 简化复杂的 SQL 操作，比如复杂的连接；- 只使用实际表的一部分数据；- 通过只给用户访问视图的权限，保证数据的安全性；- 更改数据格式和表示。
```
CREATE VIEW myview AS
SELECT Concat(col1, col2) AS concat_col, col3*col4 AS compute_col
FROM mytable
WHERE col5 = val;
```

# 14 存储过程

存储过程可以看成是对一系列 SQL 操作的批处理。

使用存储过程的好处：

>  
 - 代码封装，保证了一定的安全性；- 代码复用；- 由于是预先编译，因此具有很高的性能。


命令行中创建存储过程需要自定义分隔符，因为命令行是以 ; 为结束符，而存储过程中也包含了分号，因此会错误把这部分分号当成是结束符，造成语法错误。

包含 in、out 和 inout 三种参数。

给变量赋值都需要用 select into 语句。

每次只能给一个变量赋值，不支持集合的操作。

```
delimiter //

create procedure myprocedure( out ret int )
    begin
        declare y int;
        select sum(col1)
        from mytable
        into y;
        select y*y into ret;
    end //

delimiter ;
```

```
call myprocedure(@ret);
select @ret;
```

# 15 游标

在存储过程中使用游标可以对一个结果集进行移动遍历。

游标主要用于交互式应用，其中用户需要对数据集中的任意行进行浏览和修改。

使用游标的四个步骤：

>  
 - 声明游标，这个过程没有实际检索出数据；- 打开游标；- 取出数据；- 关闭游标；


```
delimiter //
create procedure myprocedure(out ret int)
    begin
        declare done boolean default 0;

        declare mycursor cursor for
        select col1 from mytable;
        # 定义了一个 continue handler，当 sqlstate '02000' 这个条件出现时，会执行 set done = 1
        declare continue handler for sqlstate '02000' set done = 1;

        open mycursor;

        repeat
            fetch mycursor into ret;
            select ret;
        until done end repeat;

        close mycursor;
    end //
 delimiter ;
```

# 16 触发器

触发器会在某个表执行以下语句时而自动执行：DELETE、INSERT、UPDATE

触发器必须指定在语句执行之前还是之后自动执行

>  
 - 之前执行使用 BEFORE 关键字- 之后执行使用 AFTER 关键字


BEFORE 用于数据验证和净化，AFTER 用于审计跟踪，将修改记录到另外一张表中

 

**INSERT 触发器包含一个名为 NEW 的虚拟表**

```
CREATE TRIGGER mytrigger AFTER INSERT ON mytable
FOR EACH ROW SELECT NEW.col into @result;

SELECT @result; -- 获取结果
```

DELETE 触发器包含一个名为 OLD 的虚拟表，并且是只读的。

UPDATE 触发器包含一个名为 NEW 和一个名为 OLD 的虚拟表，其中 NEW 是可以被修改的，而 OLD 是只读的。

MySQL 不允许在触发器中使用 CALL 语句，也就是不能调用存储过程。

# 17 事务管理

基本术语：

>  
 - 事务（transaction）指一组 SQL 语句；- 回退（rollback）指撤销指定 SQL 语句的过程；- 提交（commit）指将未存储的 SQL 语句结果写入数据库表；- 保留点（savepoint）指事务处理中设置的临时占位符（placeholder），你可以对它发布回退（与回退整个事务处理不同）。


不能回退 SELECT 语句，回退 SELECT 语句也没意义；也不能回退 CREATE 和 DROP 语句。

MySQL 的事务提交默认是隐式提交，每执行一条语句就把这条语句当成一个事务然后进行提交。当出现 START TRANSACTION 语句时，会关闭隐式提交；当 COMMIT 或 ROLLBACK 语句执行后，事务会自动关闭，重新恢复隐式提交。

设置 autocommit 为 0 可以取消自动提交；autocommit 标记是针对每个连接而不是针对服务器的。

如果没有设置保留点，ROLLBACK 会回退到 START TRANSACTION 语句处；如果设置了保留点，并且在 ROLLBACK 中指定该保留点，则会回退到该保留点。

```
START TRANSACTION
// ...
SAVEPOINT delete1
// ...
ROLLBACK TO delete1
// ...
COMMIT
```

# 18 字符集

基本术语：

>  
 - 字符集为字母和符号的集合- 编码为某个字符集成员的内部表示- 校对字符指定如何比较，主要用于排序和分组


除了给表指定字符集和校对外，也可以给列指定：

```
CREATE TABLE mytable
(col VARCHAR(10) CHARACTER SET latin COLLATE latin1_general_ci )
DEFAULT CHARACTER SET hebrew COLLATE hebrew_general_ci;
```

可以在排序、分组时指定校对：

```
SELECT *
FROM mytable
ORDER BY col COLLATE latin1_general_ci;
```

# 19 权限管理

MySQL 的账户信息保存在 mysql 这个数据库中。

```
USE mysql;
SELECT user FROM user;
```

**创建账户**

新创建的账户没有任何权限。

```
CREATE USER myuser IDENTIFIED BY 'mypassword';
```

**修改账户名**

```
RENAME USER myuser TO newuser;
```

**删除账户**

```
DROP USER myuser;
```

**查看权限**

```
SHOW GRANTS FOR myuser;
```

**授予权限**

账户用 username@host 的形式定义，username@% 使用的是默认主机名。

```
GRANT SELECT, INSERT ON mydatabase.* TO myuser;
```

**删除权限**

GRANT 和 REVOKE 可在几个层次上控制访问权限：

>  
 - 整个服务器，使用 GRANT ALL 和 REVOKE ALL；- 整个数据库，使用 ON database.*；- 特定的表，使用 ON database.table；- 特定的列；- 特定的存储过程。


```
REVOKE SELECT, INSERT ON mydatabase.* FROM myuser;
```

**更改密码**

必须使用 Password() 函数进行加密。

```
SET PASSWROD FOR myuser = Password('new_password');
```

 

# 后续继续细化每个章节

 
