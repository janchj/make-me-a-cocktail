import { Http } from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CocktailService {  

    apiKey = '5aca5c047b53464aa25769645912e440';

    constructor(private http:Http) {
         
    }

    getAllDrinks(){
        return this.http.get(`/api/drinks/?apikey=${this.apiKey}`)
        .map(res => res.json());
    }

    getDrinksByKeyword(keyword){
        return this.http.get(`/api/quickSearch/drinks/${keyword}/?apikey=${this.apiKey}`)
        .map(res => res.json());
    }

    getDrinkById(id){
        return this.http.get(`/api/drinks/${id}/?apikey=${this.apiKey}`)
        .map(res => res.json());
    }

}