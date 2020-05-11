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



export const getAlbums = async(req, res) => {
    const genre = req.query.Genre;
    let filter = {};
    if(genre){
        filter = {Genre: genre};
    }
    const albumsFound = await Album.find(filter);
    return res.json(albumsFound);
};
