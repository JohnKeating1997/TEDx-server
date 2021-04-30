/*
 * @Author: your name
 * @Date: 2021-04-13 14:03:25
 * @LastEditTime: 2021-04-30 19:01:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tedx-server\controller\submit.js
 */
// const {saveMusicToLocal} = require('../utils/saveFile.js')
// const formidable = require('formidable')
const path = require('path')
const fs = require('fs')
const { exec } = require('../db/mysql')

const escapeCharacter = (originalStr) => {
  originalStr = originalStr.replace(new RegExp('/'),"//")
  originalStr = originalStr.replace(/'/,"/'")
  return originalStr
}
const saveAudio = async (audioInfo) => {
  console.log('saveAudio')
  console.log('cover', audioInfo.files.cover)
  const audioTmpName = audioInfo.files.audio.name.split('.')
  const audioSuffix = audioTmpName[audioTmpName.length - 1]
  const coverTmpName = audioInfo.files.cover ? audioInfo.files.cover.name.split('.') : ''
  const coverSuffix = audioInfo.files.cover ? coverTmpName[coverTmpName.length - 1] : ''
  // 查询最后一个的id
  console.log('查询前')
  const queryLast = `select id from voice order by id DESC limit 1;`
  const lastIdList = await exec(queryLast)
  console.log('查询后')
  const lastId = lastIdList[0] && lastIdList[0].id ? lastIdList[0].id : 0
  // 存储语句
  const title = `${audioInfo.fields.title}`
  const nickName = `${audioInfo.fields.nickName}`
  const email = `${audioInfo.fields.email}`
  const createTime = Date.now()
  const cover = audioInfo.files.cover ? `${lastId}_${title}_${nickName}.${coverSuffix}` : ''
  const audio = `${lastId}_${title}_${nickName}.${audioSuffix}`
  const sql = `
  insert into voice (title,nickname,email,createtime,cover,audio)
  values('${escapeCharacter(title)}','${escapeCharacter(nickName)}','${escapeCharacter(email)}',${createTime},'${escapeCharacter(cover)}','${escapeCharacter(audio)}');
  `
  try {
    fs.rename(audioInfo.files.audio.path, path.join('./','music', audio), function(err){console.log(err)})
    if(audioInfo.files.cover) {
      fs.rename(audioInfo.files.cover.path, path.join('./','cover', cover), function(err){console.log(err)})
    }
  } catch (err) {
    console.log('没存上啊啊啊啊啊啊啊啊啊')
    console.log(err)
  }
  
  console.log('re')
  return exec(sql).then((insertResult)=>{
    // console.log('?????')
    // console.log(insertResult)
    return{
        id: insertResult.insertId
    }
  })
}

module.exports = {
    saveAudio
}