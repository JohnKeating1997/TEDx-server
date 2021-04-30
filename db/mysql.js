const mysql = require('mysql')
const {MYSQL_CONF} = require('../conf/db')

// 创建连接池
const pool = mysql.createPool(MYSQL_CONF)

const exec = function(sql) {
    const promise = new Promise((resolve, reject) => {
        pool.getConnection((err,conn) => {
            if(err) {
                console.log(err)
                reject(err)
            }
            else {
                conn.query(sql,(err,result) => {
                    conn.release()
                    if(err) {
                        reject(err)
                        return
                    }
                    resolve(result)
                })
            }
        })
    })
    return promise
}
// // 创建链接对象
// const con = mysql.createConnection(MYSQL_CONF)

// // 开始链接
// con.connect()

// // 统一执行 sql 语句 的函数
// function exec(sql){
//     const promise = new Promise((resolve,reject)=>{
//         con.query(sql,(err,result)=>{
//             if(err){
//                 reject(err)
//                 return
//             }
//             resolve(result)
//         })
//     })
//     return promise
// }

// con.end() 不要停止链接，单例模式, 后面没一次query都能访问这个con连接

module.exports = {
    exec
}