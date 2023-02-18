import { Component } from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email:string; //Captura de email
  password:string;  //Captura de password

  constructor(public userService:UsersService) { //Inicializar los dos atributos
    this.email = '';
    this.password = ''
  }

  login() {  //Función para evento clic
    const user = {email:this.email, password:this.password};

    this.userService.login(user).subscribe(data => {
      console.log(data);
    });

    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
  }

  
}
