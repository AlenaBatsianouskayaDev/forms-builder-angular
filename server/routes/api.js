const Router = require('express');
const router = new Router();
const controller = require('./../controllers/authController');
const { check } = require('express-validator');

router.get('/users', controller.getUsers);
router.post(
  '/registration',
  [check('username', 'The field cannot be empty').notEmpty()],
  [check('email', 'Enter a full email').isEmail()],
  [
    check('password', 'Password must be at least 5 characters long').isLength({
      min: 5,
    }),
  ],
  controller.registration,
);
router.post('/login', controller.login);

module.exports = router;
