import mongoose from 'mongoose';

const servicesSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true,
        unique: true,
    },
    Description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    Limited: {
        type: Boolean,
        required: true,
    }
});

export const Services = mongoose.model('Services', servicesSchema);