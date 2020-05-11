import mongoose from 'mongoose';

//Schema Artist
const Schema = mongoose.Schema;
export const artistSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: { type: String, required: true },
    Album: { type: String, required: true },
    Country: { type: String, required: true }
});
