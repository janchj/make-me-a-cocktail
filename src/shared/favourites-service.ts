import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import firebase from 'firebase';

@Injectable()
export class FavouritesService {  
    favouritesService : any;

    constructor() {
        this.favouritesService = firebase.database().ref('/').child('favourites');
    }

    getAllFavourites(){
        /*return this.favouritesService.on("value", data => {
            console.log(data.val());
            return data.val();
        });*/

        return new Observable(observer => {
            this.favouritesService.on('value',
                (snapshot) => {
                    var arr = []

                    snapshot.forEach(function(childSnapshot) {
                        arr.push(childSnapshot.val());
                    });

                    observer.next(arr)
                },
                (error) => {
                    console.log("ERROR:", error)
                    observer.error(error)
                });
        });
    }

    setFavourite(favourite){
        return this.favouritesService.child(favourite.id).set(favourite);
    }

    updateFavourite(favourite){
        return this.favouritesService.child(favourite.id).put(favourite);
    }

    removeFavourite(favourite){
        return this.favouritesService.child(favourite.id).remove();
    }

    getFavourite(favouriteId){
        return this.favouritesService.child(favouriteId).once("value", function(data) {
            return data;
        });
    }

}