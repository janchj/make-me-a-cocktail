import { SQLite } from 'ionic-native';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class FavouritesService {  
    db = new SQLite();

    constructor(platform: Platform,
                db: SQLite) {
        platform.ready().then(() => {
            this.db.openDatabase({
                name: "data.db",
                location: "default"
            }).then(() => {
                this.db.executeSql("CREATE TABLE IF NOT EXISTS favourites (id INTEGER PRIMARY KEY)", {}).then((data) => {
                    console.log("TABLE CREATED: ", data);
                }, (error) => {
                    console.error("Unable to execute sql", error);
                })
            }, (error) => {
                console.error("Unable to open database", error);
            });
        });
    }

    getAllFavourites(){
    }

    setFavourite(favourite){

    }

    getFavourite(id){

    }

}