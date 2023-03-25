import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true,
        unique: true,
    }, 
    Email: {
        type: String,
        required: true,
        unique: true,
    }, 
    Password: {
        type: String,
        required: true,
        unique: true,
    }, 
    Birthday: {
        type: Date,
    },
}, 
{
    timestamps: true,
});

export const Users = mongoose.model('Users', userSchema);