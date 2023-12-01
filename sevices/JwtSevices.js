
// const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { user } = require('../routes/UserRouter');

dotenv.config()

const genneraAccessToken = async (payload) => {
    console.log('paylaot', payload)

    const access_token = jwt.sign({

        ...payload
    }, 'process.env.ACCESS_TOKEN', { expiresIn: '30h' })

    return access_token
}
const genneraRefreshToken = async (payload) => {

    const refresh_token = jwt.sign({

        ...payload
    }, 'process.env.REFRESH_TOKEN', { expiresIn: '365d' })

    return refresh_token
}

const refreshTokensivit = async (token) => {
    return new Promise((resolve, reject) => {
        try {


            jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
                if (err) {
                    resolve({
                        status: 'err',
                        message: 'the authenticato'
                    })
                }
                const access_token = await genneraAccessToken({
                    id: user?.id,
                    isAdmin: user?.isAdmin
                })
            })

            resolve({
                status: 'ok',
                message: 'SUCCESS',
                access_token
            })




        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    genneraAccessToken,
    genneraRefreshToken,
    refreshTokensivit

}