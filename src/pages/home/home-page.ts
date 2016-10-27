import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CocktailPage } from '../';
import { CocktailService } from '../../shared';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.html'
})
export class HomePage {

  allCocktails : any;

  constructor(private navCtrl: NavController,
              private cocktailApi: CocktailService) {       
  }

  ionViewWillLoad(){
  }

  goToCocktailPage(cocktailId){
      console.log(cocktailId);
      this.navCtrl.push(CocktailPage, cocktailId);
  }

  getCocktails($event){
    this.cocktailApi.getDrinksByKeyword($event.target.value)
        .subscribe( data => {
          this.allCocktails = data.result;
        });

  }

}
