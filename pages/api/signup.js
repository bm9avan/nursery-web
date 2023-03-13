import User from "@/models/User"
import connecyDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");

async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const {userId, email}=req.body
            const u = new User({userId,email,password:CryptoJS.AES.encrypt(req.body.password, 'secret key 123').toString()})
            await u.save();
            res.status(200).json({ success: "Account created successfully!" })
        }
        catch {
            (e) => console.log("in catch ", e)
        }
    } else {
        res.status(400).json({ error: "this method is invalied" })
    }
}


export default connecyDb(handler)