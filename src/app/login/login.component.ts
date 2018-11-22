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
        private router: Router,
        private _login: LoginService,
        private dialog: MatDialog
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
      

      if (this.loginForm.invalid) {
          return;
      }
     
      let datosLogin = new Usuario(this.f.usuario.value,this.f.email.value, this.f.clave.value, this.f.perfil.value);
      this._login.ServiceLogin(datosLogin).subscribe( data =>{

        this.respuesta = JSON.parse(data._body);

          
        if (this.respuesta)
        {
          localStorage.setItem('data', JSON.stringify(this.respuesta) );
          localStorage.setItem('usuario', JSON.stringify(this.respuesta.datos) );
          
          localStorage.setItem('token', JSON.stringify(this.respuesta.token) );
          this.dialog.closeAll();

          if( this.respuesta.datos.perfil !='cliente')
          {
            this.router.navigate(['servidores']); 
          }
          else
          {
            this.router.navigate(['almacarchivos']); 
          }
         
        }
        else{
          alert("error");
          this.router.navigate(['home']); 
        }


      });

  }

  LoginCli()
  {
      this.loginForm.controls['usuario'].setValue('cliente');
      this.loginForm.controls['email'].setValue('cliente@gmail.com');
      this.loginForm.controls['clave'].setValue('1234');
      this.loginForm.controls['perfil'].setValue('cliente');
  }

  LoginVend()
  {
      this.loginForm.controls['usuario'].setValue('vendedor');
      this.loginForm.controls['email'].setValue('vendedor@gmail.com');
      this.loginForm.controls['clave'].setValue('1234');
      this.loginForm.controls['perfil'].setValue('vendedor');
  }

  LoginAdmin()
  {
      this.loginForm.controls['usuario'].setValue('administrador');
      this.loginForm.controls['email'].setValue('administrador@gmail.com');
      this.loginForm.controls['clave'].setValue('1234');
      this.loginForm.controls['perfil'].setValue('administrador');
  }
  

}
