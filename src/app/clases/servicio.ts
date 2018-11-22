export class Servicio {
  
  public idcliente: number;
	public nombre: string;
 	public megas: number;
  
   constructor(idcliente:number, nombre:string, megas:number) {
    
    this.idcliente = idcliente;
    this.nombre = nombre;  
    this.megas = megas;   
  }
 }