import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(p:any,wish:string){
    if(p.gender == 'F'){
      return `Hello miss ${p.name} ${wish}` 
    }else{
      return `Hello mr ${p.name} ${wish}`
    }
  }

}
