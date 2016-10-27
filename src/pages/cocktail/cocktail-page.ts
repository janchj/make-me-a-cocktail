import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CocktailService } from '../../shared'

@Component({
  selector: 'cocktail-page',
  templateUrl: 'cocktail-page.html'
})
export class CocktailPage {

    cocktailId : any;
    cocktail: any;
    
  constructor(private navParams: NavParams,
              private cocktailApi: CocktailService) {
                this.cocktailId = this.navParams.data;
  }

ionWillLoad(){
  console.log(this.cocktailId);
  this.cocktailApi.getDrinkById(this.cocktailId).subscribe( data =>{
    console.log(data);
    this.cocktail = data.result;
  });
}

}
