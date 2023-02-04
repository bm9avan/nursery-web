// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    s1: { aviQty: 63, price: 59, catagy: "SEEDS", title: "Tomato Seeds" },
    s2: { aviQty: 64, price: 59, catagy: "SEEDS", title: "Pepper Seeds" },
    s3: { aviQty: 62, price: 59, catagy: "SEEDS", title: "Lettuce Seeds" },
    s4: { aviQty: 61, price: 59, catagy: "SEEDS", title: "Carrot Seeds" },
    s5: { aviQty: 62, price: 59, catagy: "SEEDS", title: "Radish Seeds" },
    s6: { aviQty: 60, price: 59, catagy: "SEEDS", title: "Beet Seeds" },
    s7: { aviQty: 61, price: 59, catagy: "SEEDS", title: "Cucumber Seeds" },
    s8: { aviQty: 61, price: 59, catagy: "SEEDS", title: "Squash Seeds" },
    s9: { aviQty: 60, price: 29, catagy: "SEEDS", title: "Zucchini Seeds" },
    s10: { aviQty: 62, price: 159, catagy: "SEEDS", title: "EggPlant Seeds" },
    s11: { aviQty: 60, price: 159, catagy: "SEEDS", title: "Broccoli Seeds" },
    s12: { aviQty: 60, price: 19, catagy: "SEEDS", title: "Cauliflower Seeds" },
    p1: { aviQty: 63, price: 659, catagy: "PLANT", title: "Fiddle Leaf Fig" },
    p2: { aviQty: 64, price: 259, catagy: "PLANT", title: "Philodendron" },
    p3: { aviQty: 62, price: 359, catagy: "PLANT", title: "Peace Lily" },
    p4: { aviQty: 61, price: 459, catagy: "PLANT", title: "Pothos" },
    p5: { aviQty: 62, price: 559, catagy: "PLANT", title: "Monstera" },
    p6: { aviQty: 60, price: 659, catagy: "PLANT", title: "Aloe Vera" },
    p7: { aviQty: 61, price: 759, catagy: "PLANT", title: "Bamboo Palm" },
    p8: { aviQty: 61, price: 859, catagy: "PLANT", title: "Spider Plant" },
    p9: { aviQty: 60, price: 959, catagy: "PLANT", title: "Golden Pothos" },
    p10: { aviQty: 62, price: 1059, catagy: "PLANT", title: "Rubber Plant" },
    p11: { aviQty: 60, price: 1159, catagy: "PLANT", title: "ZZ Plant" },
    p12: { aviQty: 60, price: 1259, catagy: "PLANT", title: "Devil's Ivy" },
  })
}