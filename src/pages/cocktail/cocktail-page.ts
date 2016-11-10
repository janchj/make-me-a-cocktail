import { Component } from '@angular/core';
import { NavParams, LoadingController } from 'ionic-angular';

import { CocktailService, FavouritesService } from '../../shared'

@Component({
  selector: 'cocktail-page',
  templateUrl: 'cocktail-page.html'
})
export class CocktailPage {

    cocktail: any;
    imageUrl: any;
    
  constructor(private navParams: NavParams,
              private loadingCtrl: LoadingController,
              private cocktailApi: CocktailService,
              private favouritesService: FavouritesService) {
                this.cocktail = this.navParams.data;
  }

  setCocktailAsFavorite(cocktail){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    
    loading.present();

    this.favouritesService.setFavourite(cocktail)
        .then( data => {
          loading.dismiss();
        })
        .catch(error =>{
          console.log(error);
        })
  }

}
