import mongoose from 'mongoose';

//Schema Album
const Schema = mongoose.Schema;
export const albumSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: { type: String, required: true },
    ReleaseYear: { type: Number, required: true },
    Genre: { type: String, required: true },
    Artist: { type: String, required: true },
    Tracks: { type: String, required: true },
    Description: { type: String, required: true }
});
