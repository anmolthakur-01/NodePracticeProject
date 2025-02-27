// mongoose require kiya
const mongoose = require('mongoose');

// schema bnaya oor variable me save kar diya
const userSchema = mongoose.Schema({
    // neccessory to add id,status,createdAT
    //  id khud bhi ban jati hai
    // id:{type:Number,default:null},
    name:{type:String,default:null},
    email:{type:String,default:null},
    password:{type:String,default:null},
    userType:{type:Number,default:1}, 
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()}
});

// model banaya, uske andar schema ka naam jisme schema save kiya oor quertes ke andar pure schema ko ek naam de diya, naam kush bhi rakh sakta hain
module.exports=mongoose.model('user', userSchema);