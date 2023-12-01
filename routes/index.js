const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')
const ProductUserRouter = require('./ProductUserRouter')

const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/product', ProductRouter)
    app.use('/api/productuser', ProductUserRouter)
}
module.exports = routes