const signupService=require('../services/signupService');
const loginService=require('../services/loginService');
exports.register=async(req,res)=>{
    try{
        const user = await signupService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login=async(req,res)=>{
    try{
        const data = await loginService.login(req.body);
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};