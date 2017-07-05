const apiService = require('../services/api-service').api()

exports.user = () => {

    const _generateToken = () => {
        //Implements Logic to generate token if it does not exist
    }

    const _createUser = () => {
        // Implements Logic to save into db.
    }

    return {
        createUser: _createUser,
        generateToken: _generateToken
    }

}

