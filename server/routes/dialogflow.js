const express = require('express');
const router = express.Router();
const diagflowController = require('../Controllers/diagFlow.controller');
const intentController = require('../Controllers/allIntents.controller');

// Text Query Route
router.post('/textQuery', diagflowController.textQuery )

//Event Query Route
router.post('/eventQuery', diagflowController.eventQuery )

//All Intents Route
router.get('/allIntents', intentController.getIntents )







module.exports = router;
