const express = require('express');

const {homeView} = require('../controllers/userControllers');

const router = express.Router();

router.get('/', homeView);

module.exports = router;
