const Router = require('express');
const controller = require('./../controllers/authController');
const { check } = require('express-validator');
const authMiddleware = require('./../middleware/authMiddleware');
const roleMiddleware = require('./../middleware/roleMiddleware');

const router = new Router();

router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers);
router.post(
  '/registration',
  [check('username', 'The field cannot be empty').notEmpty()],
  [
    check('password', 'Password must be at least 5 characters long').isLength({
      min: 5,
    }),
  ],
  controller.registration,
);
router.post('/login', controller.login);

module.exports = router;
