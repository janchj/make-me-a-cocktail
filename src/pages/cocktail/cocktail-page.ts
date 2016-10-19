import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'cocktail-page',
  templateUrl: 'cocktail-page.html'
})
export class CocktailPage {

    cocktailSelected : any;
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cocktailSelected = this.navParams.data;
}

}
