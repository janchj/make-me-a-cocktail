import { NavParams } from 'ionic-angular';
import { CocktailService, FavouritesService } from '../../shared';
export declare class CocktailPage {
    private navParams;
    private cocktailApi;
    private favourites;
    cocktail: any;
    imageUrl: any;
    constructor(navParams: NavParams, cocktailApi: CocktailService, favourites: FavouritesService);
    addCocktailToFavourites(favourite: any): void;
}
