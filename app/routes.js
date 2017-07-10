
module.exports = (app) => {
    const routes = {
        client: app.controllers['chat.controller'].chatController(),
        auth: app.controllers['auth.controller'].authController(),
    }

    const middlewares = {
        clientForm: app.middlewares.forms['chat.form'].chatForm,
        authForm: app.middlewares.forms['auth.form'].authForm,
    }

    app.post("/v1/chatbot.py", middlewares.clientForm, routes.client.saveChat)
    app.post("/v1/auth.py", middlewares.authForm, routes.auth.getAuthToken)
}