export class Zapato {
  
  
	// public id: number;
  public codigozapato: number; 
  public nombre: string;
  public fingreso: string;
  public localventa: string;
  public precio: number;
  public sexozapato: string;

  constructor(
      // id: number,
      codigoZapato: number, 
      nombre: string,
      fIngreso: string,
      localVenta: string,
      precio: number,
      sexozapato: string
    ) {
  

    // this.id=  id;
    this.codigozapato= codigoZapato; 
    this.nombre= nombre;
    this.fingreso = fIngreso;
    this.localventa=  localVenta;
    this.precio= precio;
    this.sexozapato= sexozapato;
    
  }


}
