const meController = require('../app/controllers/MeController');

const express = require('express');
const router = express.Router();

router.get('/stored/courses', meController.storedCourse);

module.exports = router;