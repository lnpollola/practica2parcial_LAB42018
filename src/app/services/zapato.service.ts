
import { Injectable } from '@angular/core';
import { GenericoService} from '../services/generico.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZapatoService {

  constructor(public _generico: GenericoService) { }



   public ServiceAltaWeb(datosLogin):Observable<any> {
    
    console.log("Altaweb" + datosLogin);
    
    return this._generico.httpPost("Zapatos/AltaZapato",datosLogin)
        .pipe(data =>{return data;}); 
   }

   
  public ServiceTraerWeb():Observable<any>{

    return this._generico.httpGet("Zapatos/TodosZapatos")
    .pipe(data =>{return data;}); 

  }

  // ServiceTraerNoRepetidos
  public ServiceTraerNoRepetidos():Observable<any>{

    return this._generico.httpGet("Zapatos/ZapatosNoRep")
    .pipe(data =>{return data;}); 

  }

  public ServiceTraerRepetidos():Observable<any>{

    return this._generico.httpGet("Zapatos/ZapatosRep")
    .pipe(data =>{return data;}); 

  }

 }