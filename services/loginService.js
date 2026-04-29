const db=require('../models');
const User=db.User;
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

exports.login=async(data)=>{
    const user=await User.findOne({where:{email:data.email}});

    if(!user){
  throw new Error("User not found");   
 }

    const valid=await bcrypt.compare(data.password,user.password);

    if(!valid){
        throw new Error("Invalid password");
    }
    
    const token = jwt.sign(
        { id: user.id},
        "mysecretkey" , 
        { expiresIn: "1d" }
    );
 return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    },
    token
  };
};