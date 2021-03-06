const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/', userController.addUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser)

module.exports = router;