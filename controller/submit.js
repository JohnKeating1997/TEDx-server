const { exec } = require('../db/mysql')

const saveAudio = async (audioInfo) => {
  // 查询最后一个的id
  const queryLast = `select id from voice order by id DESC limit 1 `
  const lastIdList = await exec(queryLast)
  console.log(lastIdList[0].id)
  const lastId = lastIdList[0].id?lastIdList[0].id:0
  // 存储语句
  const title = `${audioInfo.title}`
  const nickName = `${audioInfo.nickName}`
  const email = `${audioInfo.email}`
  const createTime = Date.now()
  const cover = `${lastId}_${nickName}.png`
  const audio = `${lastId}_${nickName}.mp3`
  const sql = `
  insert into voice (title,nickname,email,createtime,cover,audio)
  values('${title}','${nickName}','${email}',${createTime},'${cover}','${audio}');
  `
  return exec(sql).then((insertResult)=>{
    console.log(insertResult)
    return{
        id: insertResult.insertId
    }
  })
}

module.exports = {
    saveAudio
}