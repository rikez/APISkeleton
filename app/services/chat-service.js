const apiService = require('../services/api-service').api()

exports.chat = () => {

    /**
     * Method creates a new chat in Hypnobox CRM
     * @param {Object} data 
     */
    const _createChat = (data) => {
        return apiService.request({
            method: `get`,
            url: `http://google.com.br/`,
            //data: data,
        })
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    }

    /**
     * Method saves Chat Story With Victoria
     * @param {Object} data 
     */
    const _saveChatStory = (data) => {
        return apiService.request({
            method: `get`,
            url: `http://google.com.br/`,
            //data: data,
        })
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    }

    return {
        createChat: _createChat,
        saveChatStory: _saveChatStory
    }

}

