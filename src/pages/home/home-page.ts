import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.html'
})
export class HomePage {

  allCocktails : any;

  constructor(public navCtrl: NavController) {
    
  }

  getCocktails($event){
      console.log($event.target.value);
      this.allCocktails =[
        {
        "id": 'cubalibre',
        "name": 'Cuba Libre',
        "imageUrl": 'http://havana-club.ca/sites/default/files/cuba_libre.png',
        "instructions": 'Pour lime juice into a highball glass over ice cubes. Add rum, fill with cola, stir, and serve.',
        "ingredients" : [{
          "id" : "lime",
          "name": "Lime Juice",
          "measure" : 15,
          "unit" : "ml"
        },
        {
          "id" : "rum",
          "name": "Rum",
          "measure" : 50,
          "unit" : "ml"
        },
        {
          "id" : "coke",
          "name": "Coke",
          "measure" : 200,
          "unit" : "ml"
        }
        ]},
        {
        "id": 'mojito',
        "name": 'Mojito',
        "imageUrl": 'http://havana-club.ca/sites/default/files/cuba_libre.png',
        "instructions": 'Pour lime juice into a highball glass over ice cubes. Add rum, fill with cola, stir, and serve.',
        "ingredients" : [{
          "id" : "lime",
          "name": "Lime Juice",
          "measure" : 15,
          "unit" : "ml"
        },
        {
          "id" : "rum",
          "name": "Rum",
          "measure" : 50,
          "unit" : "ml"
        },
        {
          "id" : "coke",
          "name": "Coke",
          "measure" : 200,
          "unit" : "ml"
        }
        ]},
      ]


  }

}
