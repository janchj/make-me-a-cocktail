import { SQLite } from 'ionic-native';
import { Injectable } from '@angular/core';

@Injectable()
export class FavouritesService {  
    db = new SQLite();

    constructor() {

    }

    getAllFavourites(){
    }

    setFavourite(favourite){

    }

    getFavourite(id){

    }

}