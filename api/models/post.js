import mongoose from 'mongoose';

const { Schema, model } = mongoose;

//? --------------------------------------------------------------------------------
//? POST MODEL SCHEMA
//? --------------------------------------------------------------------------------
const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

export default model('Post', postSchema);
