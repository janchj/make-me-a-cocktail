import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { CocktailService, FavouritesService } from '../../shared'

@Component({
  selector: 'cocktail-page',
  templateUrl: 'cocktail-page.html'
})
export class CocktailPage {

    cocktail: any;
    imageUrl: any;
    
  constructor(private navParams: NavParams,
              private cocktailApi: CocktailService,
              private favouritesService: FavouritesService) {
                this.cocktail = this.navParams.data;
  }

  setCocktailAsFavorite(cocktail){
    this.favouritesService.setFavourite(cocktail)
        .then( data => {
          console.log('works');
        })
        .catch(error =>{
          console.log(error);
        })
  }

}
