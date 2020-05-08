import mongoose from 'mongoose';
import { albumSchema } from '../modules/albumModules';

const Album = mongoose.model('Album', albumSchema);

export const addNewAlbum = (req, res) => {
    let newAlbum = new Album(req.body);
    newAlbum._id = new mongoose.Types.ObjectId();

    newAlbum.save((err, album) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(album);
    });
};

export const getAlbums = (req, res) => {
    Album.find({}, (err, album) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(album);
    });
};

export const getAlbumWithID = (req, res) => {
    Album.findById(req.params.albumId, (err, album) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(album);  
    });
};

export const updateAlbum = (req, res) => {
    Album.findOneAndUpdate ({ _id: req.params.albumId}, req.body, { new: true }, (err, album) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(album);  
    });
};

export const deleteAlbum = (req, res) => {
    Album.remove({ _id: req.params.albumId}, (err, album) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json({message: 'Successfully deleted album'});   
    });
};

//to get the old data without the update
// export const updateAlbum = (req, res) => {
//     Album.findOneAndUpdate ({ _id: req.params.albumId}, req.body, { })
// }

// export const getAlbumByTrack = (req, res) => {
//     Album.findById(req.params.trackId, (err, album) => {
//     if (err) {
//         res.send(err);
//         return;
//     }
//     res.json(album); 
// if (doc) {
//     res.status(200).json({
//         album: doc,
//         request: {
//             type: 'GET',
//             url: 'http://localhost:3000/albums' + id + '/tracks'
//         }
//     });
// } else {
//     res.status(404).json({message: 'Album not found'});
// }            
// })
// .catch(err => {
// console.log(err);
// res.status(500).json({error: err});
// });
// });