var express = require('express');
var router = express.Router();

router.post('/submit', function(req, res, next) {
  const { title, nickName, email, cover, audio} = req.body
  res.json({
    errno: 0,
    data: {
      title,
      nickName
    }
  })
});

module.exports = router;