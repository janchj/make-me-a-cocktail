import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CocktailPage } from '../';
import { CocktailService, AssetService } from '../../shared';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.html'
})
export class HomePage {
  allCocktails : any;

  constructor(private navCtrl: NavController,
              private cocktailApi: CocktailService,
              private assetApi: AssetService) {       
  }

  ionViewWillLoad(){
  }

  goToCocktailPage(cocktail){
      console.log(cocktail);
      this.navCtrl.push(CocktailPage, cocktail);
  }

  getCocktails($event){
    this.cocktailApi.getDrinksByKeyword($event.target.value)
        .subscribe( data => {
          this.allCocktails = data.result;
        });
  }

  getCocktailImageUrl(id){
    return this.assetApi.getAssetUrlByIdAndSize(id,300,400);
  }

  getCocktailTastingNotes(notes){
    let fullNotes = '';
    notes.forEach(element => {
      fullNotes += (fullNotes) ? ', ' + element.text : element.text;
    });
    return fullNotes;
  }

  setCocktailAsFavourite(cocktail){
    //this.storage.set(cocktail.id, JSON.stringify(cocktail));
  }

}
