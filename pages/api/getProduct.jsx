import Product from "@/models/Product"
import connecyDb from "../../middleware/mongoose"

async function handler(req, res) {
  let product = await Product.find()
  res.status(200).json({ product })
}

export default connecyDb(handler)