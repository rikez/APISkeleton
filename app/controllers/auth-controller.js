const _ = require('lodash');
const authService = require('../services/auth-service').authorize()
const cryptoService = require('../services/cryptograph-service').cryptograph()

exports.authController = () => {

    const _getAuthToken = (req, res) => {
        const form = _.pick(req.body, ['email', 'password', 'returnType', 'empresa']);

        req.getValidationResult()
            .then(formValidation => {
                if(!formValidation.isEmpty()) {
                    return res.status(400).json({data:formValidation.array(), success: false})
                }
                _.set(form, 'password', cryptoService.hashedContent(form.password));
                return form
            })
            .then(form => authService.authenticate(form))
            .then(response => res.status(response.status).send({data:response.data}))
            .catch(error => res.status(500).json(error))
    }

    return {
        getAuthToken: _getAuthToken
    }

}