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

    // [GET] /me/trash/courses
    deletedCourse(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render('me/deleted-courses', {
                    title: 'Khóa học đã xóa',
                    courses: multipleMongooseToObject(courses),
                })
            })
            .catch(next);
    }

    // [PUT] /me/restore/courses/:id
    restoreCourse(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch(next);
    }
}

module.exports = new MeController;