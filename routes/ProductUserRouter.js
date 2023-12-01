const express = require("express");
const router = express.Router();
const ProductUserCotroller = require('../controller/ProductUserCotroller');


router.post('/createuser', ProductUserCotroller.createProductUser)
router.put('/updateuser/:id', ProductUserCotroller.updateProductUser)

router.get('/getproductuser/:email', ProductUserCotroller.getProductUser)
router.get('/getproductuserpro/:id', ProductUserCotroller.getProductUserid)


router.get('/getallproductuser', ProductUserCotroller.getallProductUser)


router.delete('/deleteproductuser/:id', ProductUserCotroller.deleteProductUser)


module.exports = router