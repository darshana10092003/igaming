const db =require('../models');
const User=db.User;

const bcrypt=require('bcrypt');

exports.register=async(data)=>{
    //check if user exists
    const existingUser=await User.findOne({where:{email:data.email}});

    if(existingUser){
        throw new Error("User already exists with this email");
    }

    //hash pass
    const hash = await bcrypt.hash(data.password,10);

    //create user
    return await User.create({
        name:data.name,
        email:data.email,
        password:hash
    });
};