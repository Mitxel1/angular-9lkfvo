# Login

El proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Introducción
En éste pequeño ejemplo se creará una aplicación para registro e ingreso de un usuario.

## Segunda parte crear la interfaz de usuario de Login.
### Creando servicio de usuarios
Para mayor referencia véase [Services](https://angular.io/guide/creating-injectable-service)
~~~
ng g s services/users
~~~

Vamos a utilizar el API [REQURES](https://reqres.in/)
~~~
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  login(user:any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }
}
~~~

Codificamos el componente login.component.ts
~~~
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
~~~

Abrir el archivo app.module.ts y agregar el módulo     HttpClientModule
~~~
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

~~~

Levantar el servidor 
~~~
ng serve
~~~

Invocar la funcionalidad en [Login](http://localhost:4200/login)
Ingresar usuario: **eve.holt@reqres.in**  password: **cityslicka**
Verificar en el navegador el token

### 7. Registro de usuario
Modificar nuevamente el servicio users.service.ts
~~~
  register(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }
~~~

Modificar el componente register.component.ts
~~~
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

~~~
