import Product from "@/models/Product"
import connecyDb from "../../middleware/mongoose"

async function handler(req, res) {
  if (req.method == 'GET') {
    try {
      for (let i = 0; i < req.body.length; i++) {
        console.log("before")
        const p= await Product.updateOne({slug: req.body[i].slug},{$set:{
          productId: req.body[i].productId,
          title: req.body[i].title,
          slug: req.body[i].slug,
          img: req.body[i].img,
          desc: req.body[i].desc,
          categoty: req.body[i].categoty,
          amount: req.body[i].amount,
          availableQty: req.body[i].availableQty,
        }},{upsert: true})
        console.log(p)
        console.log("after not saved")
      console.log("after saved")
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