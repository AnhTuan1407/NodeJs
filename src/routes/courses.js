const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.post('/store', coursesController.store);
router.get('/create', coursesController.createCourse);
router.get('/:slug', coursesController.showDetailCourses);


module.exports = router;