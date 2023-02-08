import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email:string; //Captura de email
  password:string;  //Captura de password

  constructor() { //Inicializar los dos atributos
    this.email = '';
    this.password = ''
  }

  login() {  //Función para evento clic
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
  }
}
