import { Inject, Injectable } from '@angular/core';
import { urlToken } from './StringToken';
import { IbaseUrl } from './IBaseUrl';

@Injectable({
  providedIn: "any"
})
export class ConfigService {

  constructor(@Inject(urlToken) private xcxc:IbaseUrl) { 
    
    console.log("Config====constructor instance==="+xcxc.URL);
  }
}
