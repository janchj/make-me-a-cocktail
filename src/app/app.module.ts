import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage, CocktailPage } from '../pages/';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CocktailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CocktailPage
  ],
  providers: []
})
export class AppModule {}
