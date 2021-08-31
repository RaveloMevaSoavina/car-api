const express = require('express');
const controller = require('../controllers/comment.controller')
const { authJwt } = require('../middleware');
const router = express.Router();

router.get('/retrieveByCar/:carMatricule',authJwt.verifyToken , controller.retrieveByCar);
router.post('/create', controller.create);
router.delete('/delete', controller.delete);
router.post('/update', controller.update);

module.exports = router;