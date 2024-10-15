const meController = require('../app/controllers/MeController');

const express = require('express');
const router = express.Router();

router.get('/stored/courses', meController.storedCourse);
router.get('/trash/courses', meController.deletedCourse);
router.put('/restore/courses/:id', meController.restoreCourse);

module.exports = router;