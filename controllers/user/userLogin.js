const express = require('express');
const router = express.Router();
const UserLogin = require('../../services/userLogin.js');
router.post('/', async function(req, res, next) {
  try {
    let data=await UserLogin.GetData(req.query.page);
    let len = 300001//data.rows.length;
    // let arr=JSON.stringify({})
    // for(let i=0; i<len; i=i+35000){
    //   if(i>len){
    //     let res1=i-len;
    //     if(res1===0){

    //     }else{
    //      // res.json(data);
    //       arr=arr+JSON.stringify(data.rows.splice(i,res1))
    //     }
    //   }else{
    //   arr=arr+JSON.stringify(data.rows.splice(i,i+35000))
    //   }

    // }
    // // data=data.rows.splice(0,36000)
    // res.arr;
    // res.end();
    var out="[";
    for(var indx=0;indx<len-1;indx++){
      out+=JSON.stringify(data.rows[indx],null,4)+",";
    }
    out+=JSON.stringify(data.rows[len-1],null,4)+"]";

    res.end(out)
  } catch (err) {
    console.log(`Error while getting Get Data `, err.message);
    next(err);
  }
});
module.exports = router;