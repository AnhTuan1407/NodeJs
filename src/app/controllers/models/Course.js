const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, default: '', maxLength: 255 },
    description: { type: String, default: '', maxLength: 600 },
    image: { type: String, default: '', maxLength: 255 },
    videoId: { type: String },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);