import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { SliderComponent } from './slider/slider.component';
import { InicioComponent } from './inicio/inicio.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'tecnologias', component: TecnologiasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', component: InicioComponent },
  { path: 'saludar/:nombre', component: TecnologiasComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SliderComponent,
    InicioComponent,
    TecnologiasComponent,
    ContactoComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
