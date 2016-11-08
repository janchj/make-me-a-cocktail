import { Injectable } from '@angular/core';

@Injectable()
export class AssetService {  

    apiUrl = 'https://assets.absolutdrinks.com';

    constructor() { }

    getAssetUrlByIdAndSize(id, width, height){
        return `${this.apiUrl}/drinks/${width}x${height}/${id}.png`;
    }

}