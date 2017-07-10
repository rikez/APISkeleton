const apiService = require('../services/api.service').api()

exports.authorize = () => {

    /**
     * Method to authenticate in Hypnobox CRM API in order to obtain a token to future requests
     * @param {Object} data 
     */
    const _authenticate = (data) => {
        return apiService.request({
            method: `get`,
            url: `http://google.com.br/`,
            //data: data,
        })
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    }

    return {
        authenticate: _authenticate
    }

}

