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
![image](https://user-images.githubusercontent.com/8560750/215658585-80c50000-3da3-4967-a262-915f2380bd99.png)


## Primera parte crear la interfaz de usuario de Login.
### 1. Generar el proyecto Angular
~~~
ng new login
~~~
- Es necesario seleccionar un módulo de routing.
- Utilizar el estilo **SCSS**.

### 2. Instalar los módulos
Cambiarse al directorio recien creado en el punto 1 e instalar los módulos default cuando se instalar la aplicación.
~~~
cd login
npm install
~~~

### 3. Agregar los componentes login y registro
Mediante la terminal agregar las siguientes instrucciones para la creación de los componentes de `Login` y `Register`, vease [Components](https://angular.io/guide/component-overview) para un mejor entendimiento
~~~
 ng g c components/login
 ng g c components/register
~~~
Observa que se crea una carpeta llamada `components` dentro de la carpeta `src\app`

![image](https://user-images.githubusercontent.com/8560750/215362677-e296d9ea-87bd-4f24-b361-ccf07c95bf6f.png)

### 4. Definir las rutas de login y registro
La idea inicial es tener tres rutas: ** Home, Login,  y Register**.

Modificar el archivo `app-routing.module.ts` para agregar las rutas o paths, sino recuerda el ruteo vea la siguiente referencia [Routes](https://angular.io/api/router/Route)

~~~

const routes: Routes = [
  {path:'', component:AppComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'register', component:RegisterComponent, pathMatch: 'full'}
];  
~~~

### 5. Agregar el módulo FormsComponent
Abrir y modificar el archivo `app.module.ts`
- Observa la configuración de los módulos Login y Register recién creados en la sección declarations
- Agregar el módulo FormsModule para el manejo de formularios a través `import { FormsModule } from '@angular/forms';` e importarlo dentro de la importación del @NgModule

~~~
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
~~~

### 6. Componente Login
![image](https://user-images.githubusercontent.com/8560750/215365502-9a1cd5e3-7c26-45c8-aa7b-355ef42a5ba2.png)

Definir el estilo general de las dos formas en `styles.scss`
~~~
.form-custom {
    background-color: orange;
    border-radius: 15px;
    margin-top: 10%;
    min-width: 300px;
    min-height: 250px;
    max-width: 60%;
    margin: 0px auto;
}

.form-custom input {
    display: block;
    margin: 2rem;
    padding: 1rem;
    width: 80%;
    box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.8), inset 5px 5px 10px
      rgba(0, 0, 0, 0.1);
    background: #ebf5fc;
}

.form-custom button {
    display: block;
    border-radius: 15px;
    border: 0px solid;
    background-color: rgb(177, 163, 228);
    font-size: large;
    text-transform: uppercase;
    padding: 1rem;
    width: 100%;
}

~~~

Modificar el archivo `login.component.html` para indicar las etiquetas HTML dentro de la forma
~~~
<div class="login">
  <form action="" class="form-custom">
    <h1>Ingresar</h1>
    <input type="text" name="email" [(ngModel)]="email" placeholder="Email" required="required" />
    <input type="password" name="password" [(ngModel)]="password" placeholder="Password" required="required">

    <button type="submit" (click)="login()">Ingresar</button>
  </form>
</div>
~~~

Definir el estilo del componente `login.component.scss`
~~~
.login {
    text-align: center;
}
~~~

Definir el componente `login.component.ts` que hara el enlace con la forma a través de los atributos email y password
~~~
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

~~~

### 7. Register
Modificar la interfaz de usuario, para ello abrir el archivo `register.component.html` donde se capturará datos para el registro de usuarios
~~~
<div class="register">
  <form class="form-custom">
    <h1>Registrar</h1>
    <input
      type="text"
      name="email"
      [(ngModel)]="email"
      placeholder="Email"
      required="required"
    />
    <input
      type="password"
      name="password"
      [(ngModel)]="password"
      placeholder="Password"
      required="required"
    />
    <input
      type="password"
      [(ngModel)]="confirmPassword"
      name="password"
      placeholder="Repeat the password"
      required="required"
    />
    <button type="submit" (click)="register()">Ingresar</button>
  </form>
</div>

~~~

Modificar el archivo de estilo `register.componente.scss`
~~~
.register {
    text-align: center;
}
~~~

Modificar el archivo `register.component.ts`
~~~
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

~~~

### 8. Deployarlo en StackBlitz
1. Ingresar a la URL [StackBlitz](https://stackblitz.com/)
2. Pero primeramente agregar la instrucción `import 'zone.js';` en archivo `main.ts`

### 9. Completando la Práctica
A. Modificar el archivo de tal manera que tenga un menú en la parte superior, un slider y un footer.
