const apiService = require('../services/api').api()

exports.client = () => {

    /**
     * Method creates a client in Hypnobox CRM using manageclients
     * @param {Object} data 
     */
    const _createClient = (data) => {
        return apiService.request({
            method: `get`,
            url: `http://google.com.br/`,
            //data: data,
        })
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    }

    return {
        createClient: _createClient
    }

}

