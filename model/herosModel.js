const db = require('../config/db')
class HerosModel {
    // 查找所有
    findAll(){
        const sql = 'select * from student'
        return db.query(sql,[])
    }
    // 根据ID查找
    findById(id){
        const sql = 'select * from student where id=?'
        return db.query(sql,id)
    }
    // 根据ID更新
    update(body, id){
        const sql = 'select student ? where id=?'
        return db.query(sql,[body,id])
    }
    // 根据ID 删除
    delete(){
        const sql = 'delete  from student where id=?'
        return db.query(sql,[body,id])
    }
    // 添加数据
    create(key,value){
        const sql = 'insert into student ? values ?'
        return db.query(sql,[key,value])
    }
}

module.exports = new HerosModel;