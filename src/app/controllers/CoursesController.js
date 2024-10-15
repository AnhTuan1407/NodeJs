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
        formData.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => {
                res.redirect('/')
            })
            .catch(error => {

            });
    }

    // [GET] /courses/edit/:id
    showEdit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {
                res.render('courses/edit', {
                    title: 'Chỉnh sửa khóa học',
                    course: mongooseToObject(course)
                })
            })
            .catch(next)
    }

    // [PUT] /courses/:id
    updateCourse(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/me/stored/courses')
            })
            .catch(error => {

            })
    }

    //[DELETE] /courses/:id
    deleteCourse(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => {
                res.redirect('back')
            })
            .catch(next);
    }
}

module.exports = new CoursesController;