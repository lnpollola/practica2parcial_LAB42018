import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aumento'
})
export class AumentoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value* 1.25;
  }

}
