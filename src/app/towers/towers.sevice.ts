import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { Towers } from './towers.module';

 @Injectable()
 export class TowersService {

constructor(private http: Http) {}

getTowers() {
  return this.http.get('http://localhost:3000/towers')
    .map((response: Response) => response.json());
}
}
