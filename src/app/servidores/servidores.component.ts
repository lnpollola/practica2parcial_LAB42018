import { Component, OnInit, Input } from '@angular/core';
import { Servicio } from '../clases/servicio';
import { AltaWebService } from "../services/alta-web.service";
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
// import { MessageService } from 'primeng/api';
// import {Message} from 'primeng/components/common/api';


export interface DetalleUsuarios {
  NombServ: any;
  Contratado: any
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
  // msgs: Message[] = [];


  displayedColumns: string[] = ['NombServ','Contratado'];

  constructor(
          private builder: FormBuilder,
          // private usrService: UsuariosService, 
          private httpUsuarios:AltaWebService
        ) 
        
        {
    this.TraerTodosLosServicios();
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


  TraerTodosLosServicios()
   {

   this.httpUsuarios.TraerServicios().subscribe(data=>{
    this.listaUsuarios= JSON.parse(data._body);
    console.log(this.listaUsuarios);
    
 });
   }


   IngresarUsuario()
   {
 
        let usuario= this.registroForm.get('email').value;
        let clave= this.registroForm.get('clave').value;
        let perfil= this.registroForm.get('perfil').value;
        let sexo= this.registroForm.get('sexo').value;
  
   }

   RecibirCaptcha(ok)
   {
     console.log("recibido", ok);
    this.captcha=ok;
   }

  ngOnInit() {
    this.TraerTodosLosServicios();
  }


}
