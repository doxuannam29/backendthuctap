
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config()

const authMidlewae = (req, res, next) => {
    console.log('checktoken', req.headers.token)
    const token = req.headers.token.split(' ')[1]

    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        console.log('user', user)
        if (err) {

            return res.status(404).json(
                {
                    message: 'the authemtication',

                    status: 'errhajklbhnmr'


                }
            )
        }

        const { payload } = user
        if (payload.isAdmin) {
            next()
        } else {
            return res.status(404).json(
                {
                    message: 'the authemtication',
                    status: 'errr',
                    status: 'errr'

                }
            )
        }
    });
}


const authuserMidlewae = (req, res, next) => {
    console.log('checktoken', req.headers.token)
    const token = req.headers.token.split(" ")[1]

    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {

        if (err) {

            console.error('JWT Verification Error:', err);
        } else {
            console.log(user.foo); // bar
        }

        //     const { payload } = user
        //     if (payload.isAdmin) {
        //         next()
        //     } else {
        //         return res.status(404).json(
        //             {
        //                 message: 'the authemtication',
        //                 status: 'errr',
        //                 status: 'errr'

        //             }
        //         )
        //}
    });
}
module.exports = {

    authMidlewae,
    authuserMidlewae
}