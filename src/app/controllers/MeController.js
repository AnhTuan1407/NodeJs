const Course = require('../../app/controllers/models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourse(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('me/stored-courses', {
                    title: 'Khóa học của tôi',
                    courses: multipleMongooseToObject(courses),
                })
            })
            .catch(next);
    }
}

module.exports = new MeController;