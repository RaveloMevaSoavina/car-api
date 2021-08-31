const express = require('express');
const controller = require('../controllers/car.controller')
const router = express.Router();

router.get('/retrieve', controller.retrieve);
router.post('/create', controller.create);
router.delete('/delete', controller.delete);
router.put('/update', controller.update);

module.exports = router;