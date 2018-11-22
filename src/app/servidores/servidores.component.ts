import { Component, OnInit, Input } from '@angular/core';
import { Servicio } from '../clases/servicio';
import { AltaWebService } from "../services/alta-web.service";
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
// import { MessageService } from 'primeng/api';
// import {Message} from 'primeng/components/common/api';
import { first } from 'rxjs/operators';

export interface DetalleUsuarios {
  idUsuario: any;
  nombre_servicio: any;
  contratado: any;
}

@Component({
  selector: 'app-servidores',
  templateUrl: './servidores.component.html',
  styleUrls: ['./servidores.component.css']
})
export class ServidoresComponent implements OnInit {


  @Input() dataSource;
  captcha=false;
  listaUsuarios:Array<any>;
  loading = false;
  submitted = false;
  returnUrl: string;
  datacallback: string;
  listado: any;


  displayedColumns: string[] = ['idUsuario','nombre_servicio','contratado'];

  constructor(
          private builder: FormBuilder,
          // private usrService: UsuariosService, 
          private httpUsuarios:AltaWebService
        ) 
        
        {
  
          this.httpUsuarios.ServiceTraerWeb().subscribe( data =>{
            this.listado = JSON.parse(data._body);
          })
   }

   NombServ = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
   ]);
  
  Contratado = new FormControl('', [
    Validators.required
  ]);

  registroForm: FormGroup = this.builder.group({
    NombServ: this.NombServ,
    Contratado: this.Contratado
   
  });

  get f() { return this.registroForm.controls; }

   IngresarServicio()
   {
 
    let idusuario: any = JSON.parse(localStorage.getItem('usuario'));

    console.log(idusuario);

    idusuario = idusuario.usuario;
    
     //console.log(idusuario);
     let datosLogin = new Servicio(idusuario,this.f.NombServ.value, this.f.Contratado.value);

    console.log(datosLogin);

    this.httpUsuarios.ServiceAltaWeb(datosLogin).subscribe( data =>{
        console.log(data._body);        
    });
  
   }

   RecibirCaptcha(ok)
   {
     console.log("recibido", ok);
    this.captcha=ok;
   }

  ngOnInit() {
   
  }


}







