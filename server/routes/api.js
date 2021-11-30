const Router = require('express');
const router = new Router();
const {
  getUsers,
  login,
  registration,
} = require('./../controllers/authController');

router.get('/users', getUsers);
router.post('/registration', registration);
router.post('/login', login);

module.exports = router;
