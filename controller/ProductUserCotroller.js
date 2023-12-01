const ProductUserSevice = require('../sevices/ProductUserSevice')




const createProductUser = async (req, res) => {
    try {

        const { name, email, image, price, address, romm, soluong, description } = req.body

        if (!name) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the inpit is requai'
            })
        }

        else {

            const respons = await ProductUserSevice.createProductUser(req.body)
            return res.status(200).json(respons)
        }





    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
const updateProductUser = async (req, res) => {
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
        const respons = await ProductUserSevice.updateProductUser(productID, data)

        return res.status(200).json(respons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
const getProductUserid = async (req, res) => {
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
        const respons = await ProductUserSevice.getProductUserid(productID)

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
        const respons = await ProductUserSevice.getProductUser(productEmail)

        return res.status(200).json(respons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
const deleteProductUser = async (req, res) => {
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
        const respons = await ProductUserSevice.deleteProductUser(productID)

        return res.status(200).json(respons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
const getallProductUser = async (req, res) => {
    try {

        const { sort } = req.query
        const respons = await ProductUserSevice.getallProductUser(sort)


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
    createProductUser,
    updateProductUser,
    getProductUser,
    getallProductUser,
    deleteProductUser,
    getProductUserid,
    // getallProductUser

}