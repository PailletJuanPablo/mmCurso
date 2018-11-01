import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetallePostComponent } from './detalle-post/detalle-post.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

// Creamos una variable que contendrá un array de objetos con el path (ruta) y el componente a renderizar
const rutasApp: Routes = [
  { path: '',  component: InicioComponent },
  { path: 'inicio',  component: InicioComponent },
  { path: 'ver/:id', component: DetallePostComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DetallePostComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(rutasApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
