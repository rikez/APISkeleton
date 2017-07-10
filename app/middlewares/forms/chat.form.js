exports.chatForm = (req, res, next) => {
      req.check('name', 'Name must be at least 5 letters').notEmpty()
      next();
}