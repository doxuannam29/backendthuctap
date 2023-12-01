const User = require("../model/UserModel")
const bcrypt = require("bcrypt")
const { genneraAccessToken } = require("./JwtSevices")
const { genneraRefreshToken } = require("./JwtSevices")





const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { email, password, confimPassword, address, phone, avatar } = newUser
        try {

            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null) {
                resolve({
                    status: 'ERR',
                    message: 'the email is already'
                })
            }

            const createUser = await User.create
                ({

                    email,
                    password,
                    confimPassword,
                    address, phone, avatar


                })
            if (createUser) {

                resolve({
                    status: 'ok',
                    message: 'Success',
                    data: createUser

                })
            }
        } catch (e) {
            reject(e)
        }
    })

}


const loginUser = (userLogin
) => {
    return new Promise(async (resolve, reject) => {
        const { email, password } = userLogin

        try {

            const checkUsers = await User.findOne({
                email: email
            })
            if (checkUsers === null) {

                resolve({
                    status: "err email pass",
                    message: 'email of password'

                })
            }

            //const comparePassword = bcrypt.compareSync(password, checkUsers.password);
            // if (!comparePassword) {
            //     resolve({
            //         status: 'ok',
            //         message: 'the password or emal err',


            //     })
            // }
            // console.log('pas', password)
            // console.log('chk', checkUsers.password)
            // const access_token = AccessToken({
            //     id: checkUsers.id,
            //     isAdmin: checkUsers.isAdmin
            // })




            if (password === checkUsers.password) {

                const access_token = await genneraAccessToken({
                    id: checkUsers.id,
                    isAdmin: checkUsers.isAdmin
                })

                const refresh_token = await genneraRefreshToken({
                    id: checkUsers.id,
                    isAdmin: checkUsers.isAdmin
                })
                resolve({
                    status: 'ok',
                    message: 'Success',
                    access_token,
                    refresh_token

                })


            } else {
                resolve({
                    status: 'ok',
                    message: 'the password or emal err'
                })
            }





        } catch (e) {
            reject(e)
        }
    })

}
const updateUser = (id, data
) => {
    return new Promise(async (resolve, reject) => {


        try {

            const checkUsers = await User.findOne({
                _id: id
            })
            console.log('id', id)

            console.log("checkuser", checkUsers)
            if (id === null) {

                resolve({
                    status: "ok",
                    message: 'the email is not def'

                })
            }
            const updateUser = await User.findByIdAndUpdate(id, data, { new: true })
            console.log('update', updateUser)

            resolve({
                status: 'ok',
                message: 'Success',
                data: updateUser


            })


        } catch (e) {
            reject(e)
        }
    })

}

const deleteUser = (id
) => {
    return new Promise(async (resolve, reject) => {


        try {

            const checkUsers = await User.findOne({
                _id: id
            })
            console.log('id', id)

            console.log("checkuser", checkUsers)
            if (id === null) {

                resolve({
                    status: "ok",
                    message: 'the email is not def'

                })
            }
            const deleteUser = await User.findByIdAndDelete(id)
            console.log('update', deleteUser)

            resolve({
                status: 'ok',
                message: ' deleteUser Success',



            })


        } catch (e) {
            reject(e)
        }
    })

}

const getallUser = () => {
    return new Promise(async (resolve, reject) => {


        try {

            const allUser = await User.find()


            resolve({
                status: 'ok',
                message: ' allUser Success',
                data: allUser



            })


        } catch (e) {
            reject(e)
        }
    })

}

const getUser = (id
) => {
    return new Promise(async (resolve, reject) => {


        try {

            const Users = await User.findOne({
                _id: id
            })

            if (id === null) {

                resolve({
                    status: "ok",
                    message: 'the email is not def'

                })
            }


            resolve({
                status: 'ok',
                message: ' deleteUser Success',
                data: Users


            })


        } catch (e) {
            reject(e)
        }
    })

}



module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getallUser,
    getUser,


}