const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getLoginPage);
router.post('/', mainController.postLoginPage);

router.get('/main', mainController.getMainPage);
router.post('/main', mainController.postMainSearch);
router.post('/mainAdd', mainController.postMainAdd);


router.get('/myC', mainController.getMyCalPage);
router.post('/myC', mainController.postCalSearch);

module.exports = router;
