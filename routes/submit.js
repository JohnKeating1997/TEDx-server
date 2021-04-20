/*
 * @Author: your name
 * @Date: 2021-04-13 14:03:25
 * @LastEditTime: 2021-04-20 08:43:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tedx-server\routes\submit.js
 */
var express = require('express');
var router = express.Router();
const { saveAudio } = require('../controller/submit')
const { SuccessModel, ErrorModel } = require('../model/resModel')
// 读取contentType: multipart/form-data
// var multiparty = require('multiparty');

router.post('/submit', function(req, res, next) {
  const result = saveAudio(req)
  return result.then((data) => {
    consolo.log('----------------success！！！')
    res.json(
      new SuccessModel(data)
    ) 
  }).catch( err => {
    res.json(
      new ErrorModel(err)
    ) 
  })
});
router.get('/test', function (req,res,next) {
  res.json({
    'a':'1',
    'b':'2'
  })
})
module.exports = router;

