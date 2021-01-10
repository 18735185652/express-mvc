const mysql = require('mysql');
const dbConf = require('./db.config')


class DB{
    constructor(){
        this.mysql = mysql;
        this.mySqlConf = dbConf
    }
    query(sql,params){
        return new Promise((resolve,reject)=>{
            // 创建连接对象
            const connection = this.mysql.createConnection(this.mySqlConf)
            // 开启连接
            connection.connect(err=>{
                if(err) return console.log(err.message);
                console.log('DB连接成功');
            })  
            // 执行sql语句
            connection.query(sql,params,(err,result,fileds)=>{
                if(err){
                    reject(`db操作失败:${err}`)           
                    return
                }
                resolve({result,fileds})
            })
            connection.end((err)=>{
                if(err){
                    return  reject(`db关闭失败:${err}`)   
                }
                console.log('DB关闭成功');
            })
        })

    

    }

}

module.exports = new DB