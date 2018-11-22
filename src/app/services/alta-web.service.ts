import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AltaWebService {

  constructor(private miHttp: GenericoService) { }

  TraerServicios():Observable<any>{
    return this.miHttp.httpGet("Servicios/ListaServicios").pipe(data=>{return data});
    
  }

 public TraerUnServicio(id){
   return this.miHttp.httpGet("TraerUno/"+id)
   .pipe(data=>{return data});
 }

 public Borrar(id)
 { 
   return this.miHttp.httpPost("BorrarUno",id)
   .pipe((data)=>{return data})

 }

 public Login(usuario, clave)
{ 
   let datos = {
     "usuario": usuario,
     "clave":clave
   }
   return this.miHttp.httpPost("Sesion/",datos)
   .pipe((data)=>{return data})

}

public CerrarSesion()
{ 
   let datos = {
     "token": localStorage.getItem('token')
   }
   return this.miHttp.httpPost("Sesion/Salir",datos)
   .pipe((data)=>{return data})

}

public BorrarServicio(id)
{ 
   let datos = {
     "token": localStorage.getItem('token'),
     "id": id
   }
   return this.miHttp.httpPost("Servicios/Borrar",datos)
   .pipe((data)=>{return data})

}

public SuspenderServicio(id, estado)
{ 
   let datos = {
     "token": localStorage.getItem('token'),
     "id":id,
     "estado": estado
   }
   return this.miHttp.httpPost("Servicios/Suspender",datos)
   .pipe((data)=>{return data})

}

public CargarServicio(idServicio, idUsuario, NombreServicio , Contratado)
{ 

    let datos;
    let token= localStorage.getItem('token');

    datos = {
      "idServicio": idServicio,
      "idUsuario": idUsuario,
      "NombreServicio": NombreServicio,
      "Contratado":Contratado,
      "token": localStorage.getItem('token')
    }

  console.log(datos);


  return this.miHttp.httpPost("Servicios/Carga",datos)
  .pipe((data)=>{return data})

}

}
