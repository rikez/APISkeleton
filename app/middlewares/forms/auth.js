exports.authForm = (req, res, next) => {
      req.check('email', 'Email must not be empty').notEmpty().isEmail()
      req.check('password', 'Password must not be empty').notEmpty()
      req.check('empresa', 'Empresa must not be empty').notEmpty()
      next();
}