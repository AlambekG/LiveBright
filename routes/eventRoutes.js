const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/explore', eventController.getExplorePage);
router.get('/day', eventController.getDayPage);

router.get('/add', eventController.getAddPage);
router.post('/add', eventController.postAddPage);

router.get('/event', eventController.getEventPage);
router.post('/event', eventController.postEventPage);

module.exports = router;