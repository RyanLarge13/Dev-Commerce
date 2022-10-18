import mongoose from 'mongoose';

const billingSchema = mongoose.Schema({
    Date: {
        type: Date,
        required: true,
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    }
});

export const Billing = mongoose.model('Billing', billingSchema);