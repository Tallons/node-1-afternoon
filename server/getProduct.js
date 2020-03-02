const products = require("../products.json");

const getProduct = (req,res) => {

const item = products.find(value => value.id === parseInt(req.params.id))

    if (item){
      return res.status(200).send(item)
    }
  res.status(500).send("item not in list")

}
module.exports = getProduct;