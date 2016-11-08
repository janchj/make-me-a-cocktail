import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
export declare class CocktailService {
    private http;
    apiUrl: string;
    apiKey: string;
    constructor(http: Http);
    getAllDrinks(): Observable<any>;
    getDrinksByKeyword(keyword: any): Observable<any>;
    getDrinkById(id: any): Observable<any>;
}
