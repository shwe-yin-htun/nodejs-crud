 // req is request data 
 // res is response data
// next is always need after done response 

 const User = require('../models/User')
 module.exports = {
     addUser : (req,res,next) => {
         console.log(req.body); // this is print saved data array come from api
         const saveUser = req.body;
         const user = new User(saveUser);
            if(!saveUser._id){
                user.save((err,newUser)=>{  // newUser is return of created user
                    if(err){
                        res.send(err);
                    }else if(!newUser){
                        res.send(400);
                    }else{
                        res.send(newUser);
                    }
                    next();
                });
            }else{
                User.findById(saveUser._id,function(err,user){
                     if(err)
                        return handleError(err);
                     user.set(saveUser);
                     user.save((err,updateUser)=>{
                        if(err){
                            res.send(err);
                        }else if(!updateUser){
                            res.send(400);
                        }else{
                            res.send(updateUser);
                        }
                        next();
                     })

                });
            }
     },

    getUser : (req,res,next) => {
        console.log(req.params.id);  //this is print parameter id
        const userid = req.params.id;
        User.findById(userid).then((err,user)=>{
            if(err){
                res.send(err);
            }else if(!user){
                res.send(404);
            }else{
                res.send(user);
            }
            next();
        })
    },

    getAllUser : (req,res,next) => {
        User.find((err,users)=>{
            if(err)
              res.send(err);
            else if(!users)
              res.send(404);
            else
              res.send(users);
        })
    }
 }