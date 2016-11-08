import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import firebase from 'firebase';

import { HomePage, FavouritesPage } from '../pages'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Favourites', component: FavouritesPage },
    ];

  }

  initializeApp() {

    // init db
    const fbConf = {
          apiKey: 'AIzaSyBAAze9r8bB4gkvA9drz-DSp3huiqig8zo',
          authDomain: 'make-me-a-cocktail.firebaseapp.com',
          databaseURL: 'https://make-me-a-cocktail.firebaseio.com',
          storageBucket: 'make-me-a-cocktail.appspot.com',
          messagingSenderId: '855482944555'
        };
        
    firebase.initializeApp(fbConf);

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
