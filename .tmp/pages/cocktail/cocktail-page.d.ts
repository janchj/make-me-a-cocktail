import { NavParams } from 'ionic-angular';
import { CocktailService } from '../../shared';
export declare class CocktailPage {
    private navParams;
    private cocktailApi;
    cocktail: any;
    imageUrl: any;
    constructor(navParams: NavParams, cocktailApi: CocktailService);
}
