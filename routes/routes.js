const express = require('express');
const router = express.Router();
const mainController = require('../controller/main');

router.get('/',mainController.getIndex);
router.post('/generate-link',mainController.postNewLink);
router.get('/:dlink',mainController.getDestination);
module.exports = router;