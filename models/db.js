/**
 * Created by Administrator on 2017/5/22.
 */
var settings = require('../settings'),//加载保存数据库基本信息的模块
    Db = require('mongodb').Db,//加载MongDB数据库依赖模块，并调用相关对象
    Server = require('mongodb').Server;
//设置数据库名称、数据库地址和数据库默认端口号创建一个数据库实例，然后通过module.exports输出创建的数据库连接
module.exports = new Db(settings.db, new Server(settings.host, settings.port), {safe: true});//mongodb数据库服务器的默认端口号:27017
