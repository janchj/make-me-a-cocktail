import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import _ from 'lodash';

import { CocktailPage } from '../';
import { FavouritesService } from '../../shared'

@Component({
  selector: 'favourites-page',
  templateUrl: 'favourites-page.html'
})
export class FavouritesPage {

  favourites : any = null;

  constructor(private navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private favouritesService: FavouritesService) {
  }

  ionViewWillLoad(){

    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
    loading.present();
    this.favouritesService.getAllFavourites()
                          .subscribe((data: Array<any>) => {
                            this.favourites = data;
                            loading.dismiss();
    });
  }

  goToCocktailPage(cocktail){
      this.navCtrl.push(CocktailPage, cocktail);
  }

  isFavouritesListEmpty(){
    return (_.isEmpty(this.favourites));
  }

  removeCocktailFromFavorite(cocktail){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

    this.favouritesService.removeFavourite(cocktail)
      .then( data => {
        loading.dismiss();
      })
      .catch(error =>{
        console.log(error);
      })
  }

}
