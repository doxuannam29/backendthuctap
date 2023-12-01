const UserSevices = require('../sevices/UserSevices')
const JwtSevices = require('../sevices/JwtSevices')



const createUser = async (req, res) => {
    try {

        const { email, password, confimPassword } = req.body

        if (!email || !password || !confimPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the inpit is requai'
            })
        }
        else if (password !== confimPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the inpit is password'
            })

        }

        const respons = await UserSevices.createUser(req.body)
        console.log("rebon", respons)
        return res.status(200).json(respons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the inpit is requai'
            })
        }
        // else if (password !== confimPassword) {
        //     return res.status(200).json({
        //         status: 'ERR',
        //         message: 'the inpit is password'
        //     })

        // }


        const respons = await UserSevices.loginUser(req.body)
        const { refresh_token, ...newRespons } = respons

        res.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            secure: false,
            samesite: 'strict'
        })
        return res.status(200).json(newRespons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}

const updateUser = async (req, res) => {
    try {

        const userID = req.params.id
        const data = req.body
        console.log("userId", userID)
        if (!userID) {
            return res.status(200).json(
                {
                    status: 'err',
                    message: " the user is required"
                }
            )
        }
        const respons = await UserSevices.updateUser(userID, data)

        return res.status(200).json(respons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}

const deleteUser = async (req, res) => {
    try {

        const userID = req.params.id

        if (!userID) {
            return res.status(200).json(
                {
                    status: 'err',
                    message: " the user is required"
                }
            )
        }
        const respons = await UserSevices.deleteUser(userID)

        return res.status(200).json(respons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
const getallUser = async (req, res) => {
    try {


        const respons = await UserSevices.getallUser()

        return res.status(200).json(respons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}


const getUser = async (req, res) => {
    try {

        const userID = req.params.id

        if (!userID) {
            return res.status(200).json(
                {
                    status: 'err',
                    message: " the user is required"
                }
            )
        }
        const respons = await UserSevices.getUser(userID)

        return res.status(200).json(respons)

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
const refreshTokens = async (req, res) => {
    console.log('req.cokie', req.cookies)
    try {
        const token = req.cookies.refresh_token


        if (!token) {
            return res.status(200).json(
                {
                    status: 'err',
                    message: " the token is required"
                }
            )
        }
        const respons = await JwtSevices.refreshTokensivit(token)

        return res.status(200).json(respons)


    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
const logoutUser = async (req, res) => {
    try {

        res.clearCookie('refresh_token')

        return res.status(200).json({
            status: "ok",
            message: 'Logout'
        })

    } catch (e) {
        return res.status(404).json({

            message: e
        })
    }

}
module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getallUser,
    getUser,
    refreshTokens,
    logoutUser
}