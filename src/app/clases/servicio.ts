export class Servicio {
  
	public idServicio: number;
  public idUsuario: number; 
  public NombreServicio: string;
  public Contratado: number;

  constructor(
    idServicio: number,
    idUsuario: number,
    NombreServicio: string,
    Contratado: number,

   ) {
    this.idServicio = idServicio;
    this.idUsuario = idUsuario;
    this.NombreServicio = NombreServicio;
    this.Contratado = Contratado;
    
  }


}
