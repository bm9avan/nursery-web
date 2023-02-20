import mongoose from "mongoose";

const conectDb = handler => async (req,res)=>{
    mongoose.set('strictQuery', true);
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    // await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&tls=false&readPreference=primary")
    // console.log(process.env.MONGO_URL,typeof(process.env.MONGO_URL))
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    // await mongoose.connect('mongodb://127.0.0.1:27017/test')
    return handler(req,res)
}

export default conectDb;