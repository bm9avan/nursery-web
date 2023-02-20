import Product from "@/models/Product"
import connecyDb from "../../middleware/mongoose"

async function handler(req, res) {
  let product = await Product.find()
  console.log(product)
  console.log("step1: out")
  if (req.method == 'POST') {
    console.log("step2: in if")
    try {
      for (let i = 0; i < req.body.length; i++) {
        console.log("step3+"+i)
        const p = new Product({
          productId: req.body[i].productId,
          title: req.body[i].title,
          slug: req.body[i].slug,
          img: req.body[i].img,
          desc: req.body[i].desc,
          categoty: req.body[i].categoty,
          amount: req.body[i].amount,
          availableQty: req.body[i].availableQty,
        })
        console.log("step4: incomplete")
        console.log(product)
        console.log(p)
        p.save();
        console.log("step5: complete")
      }
      res.status(200).json({ sucess: "data added" })
    } catch {
      (e) => console.log("in catch ", e)
    }
  } else {
    res.status(400).json({ error: "this method is invalied" })
  }
}

export default connecyDb(handler)