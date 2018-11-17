import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() usuario: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {

    if(localStorage.getItem('usuario'))
    {
      console.log(localStorage.getItem('usuario'));
      this.usuario = JSON.parse(localStorage.getItem('usuario')).usuario ;
    }
   


  }

  openLoginForm(){
    this.dialog.open(LoginComponent, {width:'300px', height:'550px'});
  }

}
