import { 
    addNewAlbum, 
    getAlbums, 
    getAlbumWithID, 
    updateAlbum, 
    deleteAlbum,
} from "../controller/albumController";

import {auth} from "../controller/userController";

const routes = (app) => {
    app.use('/album', auth)
    .route('/album')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Request type ${req.method}`)
        next();
    })
    .get(getAlbums)
    //.get(getAlbumByTrack)
    
    //POST endpoint
    .post(addNewAlbum);

    app.route('/album/:albumId')

    //get specifc ID
    .get(getAlbumWithID)
    
    // put request
    .put(updateAlbum)

    //delete request
    .delete(deleteAlbum);
}

export default routes;