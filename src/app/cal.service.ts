import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalService {

  constructor() { }

  add(a,b){
    return a+b;
  }
  mul(a,b){
    return a*b;
  }
}
