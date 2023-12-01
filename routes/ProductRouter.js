const express = require("express");
const router = express.Router();
const Productcontroller = require('../controller/ProductsController');


router.post('/createpro', Productcontroller.createProduct)
router.put('/update/:id', Productcontroller.updateProduct)
router.get('/getproduct/:id', Productcontroller.getProduct)

router.get('/getproductuer/:email', Productcontroller.getProductUser)


router.get('/getallproduct', Productcontroller.getallProduct)


router.delete('/deleteproduct/:id', Productcontroller.deleteProduct)


module.exports = router