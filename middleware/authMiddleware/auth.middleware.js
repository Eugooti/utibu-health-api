const {Login}=require("./login")
const {register}=require("./register")
const {logout}=require("./logout")

const authMethods=(model)=>{

    const methods={}

    methods.register=async (req,res)=>{
        await register(model,req,res)
    }

    methods.login=async (req,res,next)=>{
        await Login(req,res,next);
    }

    methods.logout=async (req,res)=>{
        await logout(req,res)
    }

    return methods;
}

module.exports={authMethods}