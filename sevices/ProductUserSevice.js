const ProductUser = require("../model/ProductUserModel")

const createProductUser = (newProductuser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, image, price, address, romm, soluong, description } = newProductuser
        try {

            const checProduct = await ProductUser.findOne({
                name: name
            })
            if (checProduct !== null) {
                resolve({
                    status: 'ok',
                    message: 'the email is already'
                })
            }

            const newProductuser = await ProductUser.create
                ({
                    name, email, image, price, address, romm, soluong, description

                })
            if (newProductuser) {

                resolve({
                    status: 'okk',
                    message: 'Success',
                    data: newProductuser

                })
            }
        } catch (e) {
            reject(e)
        }
    })

}


const updateProductUser = (id, data
) => {
    return new Promise(async (resolve, reject) => {


        try {

            const checkProduct = await ProductUser.findOne({
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
            const updateProductUser = await ProductUser.findByIdAndUpdate(id, data, { new: true })


            resolve({
                status: 'ok',
                message: 'Success',
                data: updateProductUser


            })


        } catch (e) {
            reject(e)
        }
    })

}

const deleteProductUser = (id
) => {
    return new Promise(async (resolve, reject) => {


        try {

            const checkProductuser = await ProductUser.findOne({
                _id: id
            })
            console.log('id', id)

            console.log("checkuser", checkProductuser)
            if (id === null) {

                resolve({
                    status: "ok",
                    message: 'the email is not def'

                })
            }
            await ProductUser.findByIdAndDelete(id)


            resolve({
                status: 'ok',
                message: ' deleteProduct Success',



            })


        } catch (e) {
            reject(e)
        }
    })

}

const getallProductUser = (limit = 2, page = 1, sort) => {
    console.log('sort', sort)
    return new Promise(async (resolve, reject) => {


        try {

            const allProductuser = await ProductUser.find()


            resolve({
                status: 'ok',
                message: ' allProduct Success',
                data: allProductuser



            })


        } catch (e) {
            reject(e)
        }
    })

}

const getProductUserid = (id
) => {
    return new Promise(async (resolve, reject) => {



        try {

            const ProductUserId = await ProductUser.findOne({
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
                data: ProductUserId


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
            const getProductUsers = await ProductUser.find({
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
    createProductUser,
    updateProductUser,
    getProductUser,
    getallProductUser,
    deleteProductUser,
    getProductUserid


}