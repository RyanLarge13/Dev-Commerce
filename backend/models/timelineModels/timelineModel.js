import mongoose from "mongoose";

const timelineSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Company: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    Location: {
        type: String,
        required: true,
    },
});

export const Timeline = mongoose.model('Timeline', timelineSchema);