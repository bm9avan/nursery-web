import Product from "@/models/Product"
import connecyDb from "../../middleware/mongoose"

async function handler(req, res) {
  let productArr = await Product.find()
  res.status(200).json({ productArr })
}

export default connecyDb(handler)