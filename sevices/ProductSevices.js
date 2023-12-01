const Products = require("../model/ProductModel")

const createProduct = (newProduct) => {
    return new Promise(async (resolve, reject) => {
        const { name, image, email, price, address, romm, soluong, description } = newProduct
        try {

            const checProduct = await Products.findOne({
                name: name
            })
            if (checProduct !== null) {
                resolve({
                    status: 'ok',
                    message: 'the email is already'
                })
            }

            const newsProduct = await Products.create
                ({
                    name, image, email, price, address, romm, soluong, description

                })
            if (newsProduct) {

                resolve({
                    status: 'okk',
                    message: 'Success',
                    data: newsProduct

                })
            }
        } catch (e) {
            reject(e)
        }
    })

}


const updateProduct = (id, data
) => {
    return new Promise(async (resolve, reject) => {


        try {

            const checkProduct = await Products.findOne({
                _id: id
            })
            console.log('id', id)

            console.log("checkuser", checkProduct)
            if (id === null) {

                resolve({
                    status: "ok",
                    message: 'the email is not def'

                })
            }
            const updateProduct = await Products.findByIdAndUpdate(id, data, { new: true })
            console.log('update', updateProduct)

            resolve({
                status: 'ok',
                message: 'Success',
                data: updateProduct


            })


        } catch (e) {
            reject(e)
        }
    })

}

const deleteProduct = (id
) => {
    return new Promise(async (resolve, reject) => {


        try {

            const checkProduct = await Products.findOne({
                _id: id
            })
            console.log('id', id)

            console.log("checkuser", checkProduct)
            if (id === null) {

                resolve({
                    status: "ok",
                    message: 'the email is not def'

                })
            }
            await Products.findByIdAndDelete(id)


            resolve({
                status: 'ok',
                message: ' deleteProduct Success',



            })


        } catch (e) {
            reject(e)
        }
    })

}


const getallProduct = (limit = 2, page = 1, sort) => {
    console.log('sort', sort)
    return new Promise(async (resolve, reject) => {


        try {

            const allProduct = await Products.find()


            resolve({
                status: 'ok',
                message: ' allProduct Success',
                data: allProduct



            })


        } catch (e) {
            reject(e)
        }
    })

}

const getProduct = (id
) => {
    return new Promise(async (resolve, reject) => {


        try {

            const Product = await Products.findOne({
                _id: id
            })

            if (id === null) {

                resolve({
                    status: "ok",
                    message: 'the id pr is not def'

                })
            }


            resolve({
                status: 'ok',
                message: ' getpr Success',
                data: Product


            })


        } catch (e) {
            reject(e)
        }
    })

}
const getProductUser = (email
) => {
    return new Promise(async (resolve, reject) => {


        try {
            const getProductUsers = await Products.find({
                email: email
            });

            if (getProductUsers.length === 0) {
                resolve({
                    status: "ok",
                    message: 'Không tìm thấy người dùng với địa chỉ email đã cung cấp'
                });
            } else {
                const userData = getProductUsers.map(user => ({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    type: user.type,
                    price: user.price,
                    address: user.address,
                    romm: user.romm,
                    soluong: user.soluong,
                    description: user.description,


                }));

                resolve({
                    status: 'ok',
                    message: 'Lấy thông tin người dùng thành công',
                    data: userData
                });
            }


        } catch (e) {
            reject(e)
        }
    })

}
module.exports = {
    createProduct,
    updateProduct,
    getProduct,
    getallProduct,
    deleteProduct,
    getProductUser


}