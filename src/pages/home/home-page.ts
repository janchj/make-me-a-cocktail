import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import _ from 'lodash';

import { CocktailPage } from '../';
import { CocktailService, AssetService } from '../../shared';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.html'
})
export class HomePage {
  allCocktails : any;

  constructor(private navCtrl: NavController,
              private toastCtrl: ToastController,
              private cocktailApi: CocktailService,
              private assetApi: AssetService) {       
  }

  ionViewWillLoad(){
  }
  
  goToCocktailPage(cocktail){
      this.navCtrl.push(CocktailPage, cocktail);
  }

  getCocktails($event){
    this.cocktailApi.getDrinksByKeyword($event.target.value)
        .subscribe( data => {
          this.allCocktails = data.result;
          if(_.isEmpty(data.result)){
            this.showToastInformation('Sorry, no cocktails matching your search');
          }
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

  showToastInformation(message) {
  let toast = this.toastCtrl.create({
    message: message,
    duration: 1500,
    position: 'top'
  });
  toast.present();
}

}
