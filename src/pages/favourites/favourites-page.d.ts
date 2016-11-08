import { NavController } from 'ionic-angular';
import { FavouritesService } from '../../shared';
export declare class FavouritesPage {
    private navCtrl;
    private favouritesService;
    favourites: any;
    constructor(navCtrl: NavController, favouritesService: FavouritesService);
    ionViewWillEnter(): void;
}
