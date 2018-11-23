import { Component, OnInit, Input } from '@angular/core';

import { Zapato } from '../clases/zapato';
import { ZapatoService } from "../services/zapato.service";

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css']
})
export class BasesComponent implements OnInit {

  @Input() fechaHoy: number = Date.now();
  listado: any;
  busqueda:string;
  @Input() prodNoRepetidos: any;
  @Input() prodRepetidos: any;

  constructor( private httpUsuarios:ZapatoService) { }

  ngOnInit() {
    
    this.httpUsuarios.ServiceTraerWeb().subscribe( data =>{
      this.listado = JSON.parse(data._body);
    })
   }

   ProdNoRepetidos()
   {
    this.httpUsuarios.ServiceTraerNoRepetidos().subscribe( data =>{
      this.prodNoRepetidos = JSON.parse(data._body);
    })
   }
   
   ProdRepetidos()
   {
    this.httpUsuarios.ServiceTraerRepetidos().subscribe( data =>{
      this.prodRepetidos = JSON.parse(data._body);
    })
   }

  }


