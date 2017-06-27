
module.exports = (app) => {
    const routes = {
        client: app.controllers.client.clientController(),
        auth: app.controllers.auth.authController(),
    }

    const middlewares = {
        clientForm: app.middlewares.forms.client.clientForm,
        authForm: app.middlewares.forms.auth.authForm,
    }

    app.post("/v1/api/client.py", middlewares.clientForm, routes.client.saveClient)
    app.post("/v1/api/auth.py", middlewares.authForm, routes.auth.getAuthToken)
}