import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true,
        unique: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Link: {
        type: String,
        required: true,
        unique: true,
    },
    ImageUrl: {
        type: String,
        required: true,
        unique: true,
    },
    Favorite: {
        type: Boolean,
        required: true,
    }
}, 
{
    timestamps: true,
});

export const Projects = mongoose.model('Projects', projectSchema);