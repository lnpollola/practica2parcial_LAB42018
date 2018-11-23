import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroLocal'
})
export class FiltroPipe implements PipeTransform {

  transform(zapatos: Array<any>, nombreLocal?: any): any {
    if( nombreLocal)
    {
      console.log(zapatos);
      // return zapatos.filter(producto => producto.nombre.toLowerCase().includes(nombre) );
      return zapatos.filter(zapato => zapato.localVenta.toLowerCase().includes(nombreLocal) );
    
    }
    else
    {
      return zapatos;
    }
   
  }

}
