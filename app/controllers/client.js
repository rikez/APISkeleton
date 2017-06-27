const clientService = require('../services/client').client()
const _ = require('lodash')

exports.clientController = () => {

    const _saveClient = (req, res) => {
        const form = _.pick(req.body, ['name']);

        req.getValidationResult()
            .then(formValidation => {
                if(!_.isEmpty(formValidation)) {
                    return res.status(400).json({data:result.array(), success: false})
                }
                return form
            })
            .then(form => clientService.createClient(form))
            .then(response => res.status(response.status).json({data:response.data}))
            .catch(error => res.status(500).json(error))
    
    }

    return {
        saveClient: _saveClient
    }

}