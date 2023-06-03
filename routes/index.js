const express = require('express');
const router = express.Router();

// Import controller
const welcomeController = require('../app/Http/Controllers/WelcomeController')

// Route use
router.get("/", welcomeController.get)


module.exports = router;