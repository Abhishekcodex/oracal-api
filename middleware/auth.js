const jwt= require('jsonwebtoken')
require('dotenv').config()
const authentication =(req, res, next)=>{
    if(!req.headers.authentication){
        return res.send({message:"Please Login Again"})
    }
    const token = req.headers.authentication.split(' ')[1]
    jwt.verify(token, process.env.JWT_SECRET, function(err, decode){
        if(err){
            res.send({message:"Please Login First"})
        }else{
            req.body.userid= decode.userid
            next()
        }   
    })
}

module.exports ={authentication}