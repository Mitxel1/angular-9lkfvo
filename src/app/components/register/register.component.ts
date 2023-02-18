import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email:string; //Captura de email
  password:string;  //Captura de password
  confirmPassword:string;
  passwordError: boolean;

  constructor(public userService: UsersService) { //Inicializar los dos atributos
    this.email = '';
    this.password = ''
    this.confirmPassword = '';
    this.passwordError = false;
  }

  register() {  //Función para evento clic
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
    console.log('Confirm Password: ' + this.confirmPassword);

    const user = {email: this.email, password:this.password};

    this.userService.register(user).subscribe(data => {
      console.log(data);
    });
  }
}
