const chatService = require('../services/chat-service').chat()
const _ = require('lodash')

exports.chatController = () => {

    const _saveChat = (req, res) => {
        const form = _.pick(req.body, ['name']);

        req.getValidationResult()
            .then(formValidation => {
                if(!_.isEmpty(formValidation)) {
                    return res.status(400).json({data:result.array(), success: false})
                }
                return form
            })
            .then(form => chatService.createChat(form))
            .then(response => res.status(response.status).json({data:response.data}))
            .catch(error => res.status(500).json(error))
    
    }

    return {
        saveChat: _saveChat
    }

}