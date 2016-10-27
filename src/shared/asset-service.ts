import { Http } from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AssetService {  

    apiUrl = 'https://assets.absolutdrinks.com';

    constructor(private http:Http) { }

    getAssetUrlByIdAndSize(id, width, height){
        return `${this.apiUrl}/drinks/${width}x${height}/${id}.png`;
    }

}