const jwt = require('jsonwebtoken');

module.exports = (database) => {
    if(!database) {
        throw new Error("Database must be a valid parameter");
    } 
    const _verifyToken = (req, res, next) => {
        let token = req.headers['token'] || ''
        
        database.token.findOne({token: token})
            .then(tokenInstance => {
                if(!tokenInstance) throw new Error()
                req.token = tokenInstance
                return database.user.findByToken(token)
            })
            .then(user => {
                req.user = user
                next()
            })
            .catch(error => res.status(401).json({error: "Token inválido"}))
    }

    return {
        verifyToken: _verifyToken,
    }

}