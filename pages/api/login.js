import User from "@/models/User"
import connecyDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");

async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const u = await User.findOne({ email: req.body.email })
            var bytes = CryptoJS.AES.decrypt(u.password, 'secret key 123');
            var passwordDecrypt = bytes.toString(CryptoJS.enc.Utf8);
            if (u) {
                if (passwordDecrypt === req.body.password) {
                    res.status(200).json({ success: "Login successfully! " + u.userId })
                } else {
                    res.status(200).json({ error: "Invalied Password" })
                }
            } else {
                res.status(200).json({ error: "User not found" })
            }
        }
        catch {
            (e) => console.log("in catch ", e)
        }
    } else {
        res.status(400).json({ error: "this method is invalied" })
    }
}


export default connecyDb(handler)