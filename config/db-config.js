module.exports = () => {
    return {
        mysql:{
            dbHost: process.env.DB_HOST,
            dbUser: process.env.DB_USER,
            dbPass: process.env.DB_PASSWORD,
            dbName: process.env.DB_NAME,
            dbPort: process.env.DB_PORT
        }
    }
}