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

// //Model Album
// const Album = mongoose.model('album', albumSchema);

// //Saving data to database for Album
// const data = {
//    // _id: '5eade3b207d0f98b47c61e70',
//     Name: 'Adele 21',
//     ReleaseYear: 2010,
//     Genre: 'Pop',
//     Artist: 'Adele',
//     Tracks: 'Rolling in deep, someone like you, set fire on the rain',
//     Description: '21 is the second studio album by Adele'
// };

// const newAlbum = new Album(data);

// newAlbum.save((error) => {
//     if (error) {
//         console.log('ops error');
//     } else {
//         console.log('data has been saved for Album');
//     }
// });


