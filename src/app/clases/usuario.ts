export class Usuario {
  
  
	public usuario: string;
  public email: string; 
  public clave: string;
  public perfil: string;

  constructor(usuario:string, email:string, clave:string, perfil:string ) {
    this.usuario = usuario;
    this.email = email;
    this.clave = clave;
    this.perfil = perfil;
    
  }


}
