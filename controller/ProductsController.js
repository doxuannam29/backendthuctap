const ProductSevices = require('../sevices/ProductSevices')




const createProduct = async (req, res) => {
    try {

        const { name, image, email, price, address, romm, soluong, description } = req.body

        if (!name) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the inpit is requai???'
            })
        }

        else {

            const respons = await ProductSevices.createProduct(req.body)
            return res.status(200).json(respons)
        }





    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
const updateProduct = async (req, res) => {
    try {

        const productID = req.params.id
        const data = req.body
        console.log("productID", productID)
        if (!productID) {
            return res.status(200).json(
                {
                    status: 'err',
                    message: " the updateProduct is required"
                }
            )
        }
        const respons = await ProductSevices.updateProduct(productID, data)

        return res.status(200).json(respons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
const getProductUser = async (req, res) => {
    try {

        const productEmail = req.params.email

        if (!productEmail) {
            return res.status(200).json(
                {
                    status: 'err',
                    message: " the getpr is required"
                }
            )
        }
        const respons = await ProductSevices.getProductUser(productEmail)

        return res.status(200).json(respons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
const getProduct = async (req, res) => {
    try {

        const productID = req.params.id

        if (!productID) {
            return res.status(200).json(
                {
                    status: 'err',
                    message: " the getpr is required"
                }
            )
        }
        const respons = await ProductSevices.getProduct(productID)

        return res.status(200).json(respons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
const deleteProduct = async (req, res) => {
    try {

        const productID = req.params.id

        if (!productID) {
            return res.status(200).json(
                {
                    status: 'err',
                    message: " the user is required"
                }
            )
        }
        const respons = await ProductSevices.deleteProduct(productID)

        return res.status(200).json(respons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
const getallProduct = async (req, res) => {
    try {

        const { sort } = req.query
        const respons = await ProductSevices.getallProduct(sort)


        return res.status(200).json(respons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
// const getallProductUser = async (req, res) => {
//     try {
//         const productUser =p

//         const { sort } = req.query
//         const respons = await ProductSevices.getallProductUser()


//         return res.status(200).json(respons)

//     } catch (e) {
//         return res.status(404).json({

//             message: e
//         })
//     }

// }
module.exports = {
    createProduct,
    updateProduct,
    getProduct,
    getallProduct,
    deleteProduct,
    getProductUser
    // getallProductUser

}