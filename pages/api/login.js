import User from "@/models/User"
import connecyDb from "../../middleware/mongoose"

async function handler(req, res) {
    if (req.method == 'POST')
     {
        try {
            const u = await User.findOne({email:req.body.email})
            if(u){
                if(u.password===req.body.password){
                    res.status(200).json({ success: "Login successfully! "+u.userId })
                }else{
                    res.status(200).json({ error: "Invalied Password" })
                }
            }else{
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