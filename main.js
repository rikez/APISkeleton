const app = require('./config/express-config')

app.listen(process.env.PORT, () => {
    console.log( app.get('clr').green('Hypnobox ') 
    + app.get('clr').rainbow(`API Server is ready to go at port ${process.env.PORT}`))
})