import { 
    addNewAlbum, 
    getAlbums, 
    getAlbumWithID, 
    updateAlbum, 
    deleteAlbum,
} from "../controller/albumController";

const routes = (app) => {
    app.route('/album')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Request type ${req.method}`)
        next();
    })
    .get(getAlbums)
    
    //POST endpoint
    .post(addNewAlbum);

    app.route('/album/:albumId')

    //get specifc ID
    .get(getAlbumWithID)
    //.get(getAlbumByArtist)
    
    // put request
    .put(updateAlbum)

    //delete request
    .delete(deleteAlbum);
}

export default routes;