import mongoose from 'mongoose';

//Schema Artist
const Schema = mongoose.Schema;
export const artistSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: { type: String, required: true },
    Album: { type: String, required: true },
    Country: { type: String, required: true }
});

// //Model Artist
// const Artist = mongoose.model('artist', artistSchema);

// //Saving data to database for Artist
// const dataLast = {
//     //_id: '5eade3b207d0f98b47c61e91',
//     Name: 'Madonna',
//     Album: 'Madame X',
//     //AlbumId: '5eade3b207d0f98b47c61e92',
//     Country: 'USA'
// };

// const newArtist = new Artist(dataLast);

// newArtist.save((error) => {
//     if (error) {
//         console.log('ops error');
//     } else {
//         console.log('data has been saved for artist');
//     }
// });