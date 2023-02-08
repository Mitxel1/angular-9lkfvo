import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email:string; //Captura de email
  password:string;  //Captura de password
  confirmPassword:string;

  constructor() { //Inicializar los dos atributos
    this.email = '';
    this.password = ''
    this.confirmPassword = '';
  }

  register() {  //Función para evento clic
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
    console.log('Confirm Password: ' + this.confirmPassword);
  }
}
