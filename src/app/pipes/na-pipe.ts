import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
  pure:true
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
     console.log("transform")
    if(value != null && value != undefined && value != '') {
      return value;
    } else {
      return "--";
      //return "NA";
    }
    
  }

}
