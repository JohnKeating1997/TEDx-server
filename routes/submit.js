var express = require('express');
var router = express.Router();
const { saveAudio } = require('../controller/submit')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/submit', function(req, res, next) {
  console.log(req.body)
  const result = saveAudio(req.body)
  return result.then((data) => {
    res.json(
      new SuccessModel(data)
    ) 
  }).catch( err => {
    res.json(
      new ErrorModel(err)
    ) 
  })
});

module.exports = router;