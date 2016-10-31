import { SQLite } from 'ionic-native';
import { Injectable } from '@angular/core';

@Injectable()
export class FavouritesService {  
    db = new SQLite();

    constructor() {
        let db = new SQLite();
        db.openDatabase({
            name: "data.db",
            location: "default"
        }).then(() => {
            db.executeSql("CREATE TABLE IF NOT EXISTS favourites (id INTEGER PRIMARY KEY)", {}).then((data) => {
                console.log("TABLE CREATED: ", data);
                this.db = db;
            }, (error) => {
                console.error("Unable to execute sql", error);
            })
        }, (error) => {
            console.error("Unable to open database", error);
        });
    }

    getAllFavourites(){
    }

    setFavourite(favourite){

    }

    getFavourite(id){

    }

}