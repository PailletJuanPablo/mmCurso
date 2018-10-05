// Modulos
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
// Componentes
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { CrearDatosComponent } from "./crear-datos/crear-datos.component";

// Servicios
import { UsersService } from "./servicios/users.service";
import { RecibirDatosComponent } from "./recibir-datos/recibir-datos.component";
import { CategoriasService } from "./categorias.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    CrearDatosComponent,
    RecibirDatosComponent
  ],
  imports: [
    BrowserModule,
    // Lo inyectamos en imports
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UsersService, CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
