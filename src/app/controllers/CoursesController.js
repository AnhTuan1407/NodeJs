const { mongooseToObject } = require('../../util/mongoose');
const Course = require('./models/Course');

class CoursesController {

    // [GET] /courses/:slug
    showDetailCourses(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    // [GET] /courses/create
    createCourse(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
    }
}

module.exports = new CoursesController;