import { Component, OnInit, Input } from '@angular/core';
import { Zapato } from '../clases/zapato';
import { ZapatoService } from "../services/zapato.service";
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
// import { MessageService } from 'primeng/api';
// import {Message} from 'primeng/components/common/api';
import { first } from 'rxjs/operators';

export interface DetalleUsuarios {
  id: number;
  codigoZapato: number; 
  nombre: string;
  fIngreso: string;
  localVenta: string;
  precio: number;
  sexoZapato: string;

}

@Component({
  selector: 'app-servidores',
  templateUrl: './servidores.component.html',
  styleUrls: ['./servidores.component.css']
})
export class ServidoresComponent implements OnInit {

  @Input() fechaHoy: number = Date.now();
  @Input() dataSource;
  captcha=false;
  listaUsuarios:Array<any>;
  loading = false;
  submitted = false;
  returnUrl: string;
  datacallback: string;
  listado: any;
  
  displayedColumns: string[] = ['codigoZapato','nombre','fIngreso','localVenta','precio','sexoZapato'];

  constructor(
          private builder: FormBuilder,
          // private usrService: UsuariosService, 
          private httpUsuarios:ZapatoService
        ) 
        
        {
  
          this.httpUsuarios.ServiceTraerWeb().subscribe( data =>{
            this.listado = JSON.parse(data._body);
          })
   }

  
   codigoZapato = new FormControl('', [
    Validators.required
  ]);

  nombre = new FormControl('', [
    Validators.required
  ]);

  fIngreso = new FormControl('', [
    Validators.required
  ]);

  localVenta = new FormControl('', [
    Validators.required
  ]);

  precio = new FormControl('', [
    Validators.required
  ]);

  sexoZapato = new FormControl('', [
    Validators.required
   ]);


  registroForm: FormGroup = this.builder.group({
    codigoZapato: this.codigoZapato,
    nombre: this.nombre,
    fIngreso: this.fIngreso,
    localVenta: this.localVenta,
    precio: this.precio,
    sexoZapato: this.sexoZapato  
  });

  get f() { return this.registroForm.controls; }

  IngresarZapato()
   {
 
    // let idusuario: any = JSON.parse(localStorage.getItem('usuario'));

    // console.log(idusuario);

    // idusuario = idusuario.usuario;
    
     //console.log(idusuario);
     let datosLogin = new Zapato(
                                 
                                  this.f.codigoZapato.value,
                                  this.f.nombre.value,
                                  this.f.fIngreso.value,
                                  this.f.localVenta.value,
                                  this.f.precio.value,
                                  this.f.sexoZapato.value  
                                  );

    console.log(datosLogin);

    this.httpUsuarios.ServiceAltaWeb(datosLogin).subscribe( data =>{
        console.log(data._body);        
    });


    this.httpUsuarios.ServiceTraerWeb().subscribe( data =>{
      this.listado = JSON.parse(data._body);
    })
   }

   RecibirCaptcha(ok)
   {
     console.log("recibido", ok);
    this.captcha=ok;
   }

  ngOnInit() {
   
  }


}







