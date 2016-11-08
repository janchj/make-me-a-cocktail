import { NavController } from 'ionic-angular';
import { CocktailService, AssetService } from '../../shared';
export declare class HomePage {
    private navCtrl;
    private cocktailApi;
    private assetApi;
    allCocktails: any;
    constructor(navCtrl: NavController, cocktailApi: CocktailService, assetApi: AssetService);
    ionViewWillLoad(): void;
    goToCocktailPage(cocktail: any): void;
    getCocktails($event: any): void;
    getCocktailImageUrl(id: any): string;
    getCocktailTastingNotes(notes: any): string;
    setCocktailAsFavourite(cocktail: any): void;
}
