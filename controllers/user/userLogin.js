const express = require('express');
const router = express.Router();
const UserLogin = require('../../services/userLogin.js');
router.post('/', async function(req, res, next) {
  try {
    let data=await UserLogin.GetData(req.query.page);
    res.json(data);
  } catch (err) {
    console.log(`Error while getting Get Data `, err.message);
    next(err);
  }
});
module.exports = router;