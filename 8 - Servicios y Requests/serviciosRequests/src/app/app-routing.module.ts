import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecibirDatosComponent } from './recibir-datos/recibir-datos.component';
import { CrearDatosComponent } from './crear-datos/crear-datos.component';
import { HomePageComponent } from './home-page/home-page.component';

// Creamos constante con las rutas
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'recibir', component: RecibirDatosComponent },
  { path: 'crear', component: CrearDatosComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes) // configuración para el módulo raíz
  ],
  exports: [
    RouterModule // se importará desde el módulo padre
  ]

})
export class AppRoutingModule { }
