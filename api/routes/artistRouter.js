import { 
    addNewArtist, 
    getArtist, 
    getArtistWithID, 
    updateArtist, 
    deleteArtist,
    //getArtistByName,
} from "../controller/artistController";

const router = (app) => {
    app.route('/artist')
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
    //.get(getArtistByArtist)
    //.get(getArtistByName)

    // put request
    .put(updateArtist)

    //delete request
    .delete(deleteArtist);
}

export default router;