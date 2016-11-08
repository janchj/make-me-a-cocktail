import { SQLite } from 'ionic-native';
export declare class FavouritesService {
    db: SQLite;
    constructor();
    getAllFavourites(): void;
    setFavourite(favourite: any): void;
    getFavourite(id: any): void;
}
