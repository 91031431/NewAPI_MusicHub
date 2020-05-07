import mongoose from 'mongoose';
import { artistSchema } from '../modules/artistModules';

const Artist = mongoose.model('Artist', artistSchema);

export const addNewArtist = (req, res) => {
    let newArtist = new Artist(req.body);

    newArtist.save((err, album) => {
        if (err){
            res.send(err);
            return;
        }
        res.json(album);
    });
};

export const getArtist = (req, res) => {
    Artist.find({}, (err, album) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(album);
    });
};

export const getArtistWithID = (req, res) => {
    Artist.findById(req.params.artistId, (err, album) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(album);  
    });
};

export const updateArtist = (req, res) => {
    Artist.findOneAndUpdate ({ _id: req.params.artistId}, req.body, { new: true }, (err, album) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(album);  
    });
};

export const deleteArtist = (req, res) => {
    Artist.remove({ _id: req.params.artistId}, (err, album) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json({message: 'Successfully deleted artist'});   
    });
};

// export const getArtistWithName = (req,res) => {
//     Artist.findOne(req.params.artistName, (err, album) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(album);  
//     });
// };
