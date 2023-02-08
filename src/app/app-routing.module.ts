import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:'game/inicio', component:InicioComponent, pathMatch:'full'},
  {path:'game/login', component:LoginComponent, pathMatch:'full'},
  {path:'game/registrar', component:RegisterComponent, pathMatch: 'full'}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
