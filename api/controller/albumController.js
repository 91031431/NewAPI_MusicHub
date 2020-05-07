import mongoose from 'mongoose';
import { albumSchema } from '../modules/albumModules';

const Album = mongoose.model('Album', albumSchema);

export const addNewAlbum = (req, res) => {
    let newAlbum = new Album(req.body);

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

// export const getAlbumByArtist = (req, res) => {
//     Album.findOne({ _id: req.params.albumId}, req.body, { }, (err, album) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(album);  
//     });
// }; 