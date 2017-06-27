
module.exports = (app) => {
    const routes = {
        client: app.controllers.client.clientController(),
        clientForm: app.middlewares.forms.client.clientForm,
        auth: app.controllers.auth.authController(),
        authForm: app.middlewares.forms.auth.authForm,
    }

    app.post("/v1/api/client.py", routes.clientForm, routes.client.saveClient)
    app.post("/v1/api/auth.py", routes.authForm, routes.auth.getAuthToken)
}