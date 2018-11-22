import { Injectable } from '@angular/core';
import { GenericoService} from '../services/generico.service';
import { Observable } from 'rxjs';
 @Injectable({
  providedIn: 'root'
})
export class AltaWebService {
   constructor(public _generico: GenericoService) { }


   public ServiceAltaWeb(datosLogin):Observable<any> {
    
    console.log("Altaweb" + datosLogin);
    
    return this._generico.httpPost("Servicios/AltaWeb",datosLogin)
        .pipe(data =>{return data;}); 
   }

   
  public ServiceTraerWeb():Observable<any>{

    return this._generico.httpGet("Servicios/TodasWebs")
    .pipe(data =>{return data;}); 

  }

 }