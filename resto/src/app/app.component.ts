import { Component } from '@angular/core';

import{RestoService} from './resto.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private resto:RestoService){
    this.resto.getlist()
  }
}
