/*
 * @Author: your name
 * @Date: 2021-04-13 14:03:25
 * @LastEditTime: 2021-04-20 09:55:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tedx-server\conf\db.js
 */
const env = process.env.NODE_ENV  // 获取环境参数

// 配置
let MYSQL_CONF
let REDIS_CONF

if (env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'Hu_Hong_Hao123',
        port: '3306',
        database: 'tedx_voice' // use tedx_voice
    }

    //redis
    // REDIS_CONF = {
    //     port: 6379,
    //     host: '127.0.0.1'
    // }
}

if (env === 'prd') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'Hu_Hong_Hao123',
        port: '3306',
        database: 'tedx_voice' // use tedx_voice
    }

    //redis
    // REDIS_CONF = {
    //     port: 6379,
    //     host: '127.0.0.1'
    // }
}

module.exports = {
    MYSQL_CONF,
    // REDIS_CONF
}