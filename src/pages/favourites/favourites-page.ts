import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FavouritesService } from '../../shared'

@Component({
  selector: 'favourites-page',
  templateUrl: 'favourites-page.html'
})
export class FavouritesPage {

  favourites : any = [];

  constructor(private navCtrl: NavController,
              private favouritesService: FavouritesService) {
  }


ionViewWillEnter(){
  this.favouritesService.getAllFavourites();
}

}
