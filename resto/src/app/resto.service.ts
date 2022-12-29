import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  constructor() { }

  getlist(){
    return console.log("some list of restorent");
  }
  
}
