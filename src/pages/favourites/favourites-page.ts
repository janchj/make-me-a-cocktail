import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import _ from 'lodash';

import { CocktailPage } from '../';
import { FavouritesService } from '../../shared'

@Component({
  selector: 'favourites-page',
  templateUrl: 'favourites-page.html'
})
export class FavouritesPage {

  favourites : any;

  constructor(private navCtrl: NavController,
              private favouritesService: FavouritesService) {
  }

  ionViewWillLoad(){
    this.favouritesService.getAllFavourites()
                          .subscribe((data: Array<any>) => {
                            this.favourites = data;
    });
  }

    goToCocktailPage(cocktail){
      this.navCtrl.push(CocktailPage, cocktail);
  }

    removeCocktailFromFavorite(cocktail){
    this.favouritesService.removeFavourite(cocktail)
        .then( data => {
          console.log('removed');
        })
        .catch(error =>{
          console.log(error);
        })
  }

}
