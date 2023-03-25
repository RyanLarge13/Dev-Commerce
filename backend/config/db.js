import mongoose from "mongoose";

//Connecting to the database
export const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log(`You have successfully connected to the database.`);
    }).catch((err) => {
        console.log(`Error: ${err}`);
    });
};