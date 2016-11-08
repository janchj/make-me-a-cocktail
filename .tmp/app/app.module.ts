import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage, CocktailPage, FavouritesPage } from '../pages';
import { CocktailService, AssetService, FavouritesService } from '../shared';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CocktailPage,
    FavouritesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CocktailPage,
    FavouritesPage
  ],
  providers: [
    CocktailService,
    AssetService,
    FavouritesService
  ]
})
export class AppModule {}
