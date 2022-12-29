import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // city:string=" Hydrabad";

  // ishidden:boolean=true;


  // x=1;

  // test(){
  //   return this.x;
  // }

  // counter=0;
  // name="xyz";

  // increment(){
  //   this.counter+=1;
  // }
  // decrement(){
  //   this.counter-=1
  // }
  // changeName(e : any){
  //   this.name = e.target.value;
  // }


  city ="hydrabad";
  updateCity(){
    this.city="Bangloor";
  }
    

}
