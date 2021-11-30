const Router = require('express');
const router = new Router();
const controller = require('./../controllers/authController');
const { check } = require('express-validator');

router.get('/users', controller.getUsers);
router.post(
  '/registration',
  [check('username', 'The field cannot be empty').notEmpty()],
  [
    check('password', 'Password must be at least 5 characters long').isLength({
      min: 5,
      max: 10,
    }),
  ],
  controller.registration,
);
router.post('/login', controller.login);

module.exports = router;
