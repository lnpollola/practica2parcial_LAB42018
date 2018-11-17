import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {LoginService} from '../../../src/app/services/login.service';
import {Usuario} from '../clases/usuario';
import { MatDialog, MatDialogRef} from '@angular/material';
import { delay } from 'rxjs/operators';
import { Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() usuario: Usuario;

  @ViewChild("usuarioInput") usuarioInput:ElementRef;

  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    datacallback: string;
    public dataRespuesta:any;
    respuesta: any;

    constructor(
        private formBuilder: FormBuilder,
        //private route: ActivatedRoute,
        private router: Router,
        private _login: LoginService,
        private dialog: MatDialog
        //private authenticationService: AuthenticationService,
        //private alertService: AlertService
        ) {}

    ngOnInit() {

      this.usuario= new Usuario('','', '', '');


        this.loginForm = this.formBuilder.group({
            usuario: [''],
            email:  [''],
            clave: [''],
            perfil: [''],
        });
      }

      get f() { return this.loginForm.controls; }





  Entrar(){ 
    
      this.submitted = true;
      this.loading = true;
      
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
     
      let datosLogin = new Usuario(this.f.usuario.value,this.f.email.value, this.f.clave.value, this.f.perfil.value);


      // console.log(datosLogin);

      this._login.ServiceLogin(datosLogin).subscribe( data =>{
  
        // console.log(data._body);

        this.respuesta = JSON.parse(data._body);
        // this.respuesta = data._body;
        localStorage.setItem('data', JSON.stringify(this.respuesta) );
        localStorage.setItem('usuario', JSON.stringify(this.respuesta.datos) );
        
        this.usuario = JSON.parse(localStorage.getItem('usuario')).usuario ;
        
        localStorage.setItem('token', JSON.stringify(this.respuesta.token) );
      
        // console.log(this.respuesta);

        // console.log(this.respuesta.datos);

        // if( this.respuesta.datos.estado === "Activo")  
        // {
          this.dialog.closeAll();
          this.router.navigate(['home']); 
        // }
      });
    //   delay(2000);

  }

  LoginProf()
  {

    // this.loginForm = this.formBuilder.group({
    //   usuario: ['userProf'],
    //   email:  ['userProf@gmail.com'],
    //   clave: ['1234'],
    //   perfil: ['Profesional'],
    //   });

 

      this.loginForm.controls['usuario'].setValue('userProf');
      this.loginForm.controls['email'].setValue('userProf@gmail.com');
      this.loginForm.controls['clave'].setValue('1234');
      this.loginForm.controls['perfil'].setValue('Profesional');
    // this.usuario.usuario = "userProf",
    // this.loginForm.controls.usuario = "userProf",

    // this.usuario.email = "userProf@gmail.com",
    // this.usuario.perfil = "Profesional"
    // this.usuario.clave = "1234"
    
    // // document.getElementById("usuarioInput").focus();

    // this.usuarioInput.nativeElement.focus();

  }

  
  

}
