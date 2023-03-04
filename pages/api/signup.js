import User from "@/models/User"
import connecyDb from "../../middleware/mongoose"

async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const u = new User(req.body)
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