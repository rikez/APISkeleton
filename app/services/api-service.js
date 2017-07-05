const restClient = require('axios');

exports.api = () => {
    /**
     * Method is used as a Interface for making requests.
     * @param {Object} options 
     */
    const _request = (options) => {
        if(!options) throw new Error("Invalid argument");
        return restClient(options)
                .then(response => Promise.resolve(response))
                .catch(error => Promise.reject(error))
    }

    return {
        request: _request
    }

}

