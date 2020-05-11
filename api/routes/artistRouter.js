import { 
    addNewArtist, 
    getArtist, 
    getArtistWithID, 
    updateArtist, 
    deleteArtist,
} from "../controller/artistController";

import {auth} from "../controller/userController";

const router = (app) => {
    app.use('/artist', auth)
    .route('/artist')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Request type ${req.method}`)
        next();
    },  getArtist)
    
    //POST endpoint
    .post(addNewArtist);

    app.route('/artist/:artistId')

    //get specifc ID
    .get(getArtistWithID)

    // put request
    .put(updateArtist)

    //delete request
    .delete(deleteArtist);
}

export default router;