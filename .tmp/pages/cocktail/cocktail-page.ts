import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { CocktailService } from '../../shared'

@Component({
  selector: 'cocktail-page',
  templateUrl: 'cocktail-page.html'
})
export class CocktailPage {

    cocktail: any;
    imageUrl: any;
    
  constructor(private navParams: NavParams,
              private cocktailApi: CocktailService) {
                this.cocktail = this.navParams.data;
  }

}
