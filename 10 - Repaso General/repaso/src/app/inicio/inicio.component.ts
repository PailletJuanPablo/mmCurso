import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  cargando = false;
  mostrar: 'recibir' | 'enviar';
  posts: Array<{id: string, title: string, body: string}> = [];
  // Campos de un post
  titulo: string ;
  contenido: string;
  // Donde almacenaremos la respuesta el enviar información
  respuesta: Object;
  constructor(public http: HttpClient) {
  }

  recibirDatos() {
    this.cargando = true;
    this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise()
    .then((datos: Array<{id: string, title: string, body: string}>) => {
      // Si se ejecuto correctamente
      this.cargando = false;
      console.log(datos);
      this.posts = datos;
      this.mostrar = 'recibir';
    })
    .catch((error) => {
      // Si no se ejecutó correctamente
      this.cargando = false;
      console.log(error);
    });
  }

  enviarDatos() {
    this.cargando = true;
    // Creamos una variable local con let, llamada body, que contendrá los campos a enviar
    const cuerpoPeticion = {
      title: this.titulo,
      content: this.contenido
    };
    // Posteriormente, realizamos la petición y enviamos esta variable como parámetro
    this.http.post('https://jsonplaceholder.230912301239310.com/posts', cuerpoPeticion).toPromise()
    .then((respuestaObtenida) => {
      // Salio bien
      this.cargando = false;
      console.log(respuestaObtenida);
      this.respuesta = JSON.stringify(respuestaObtenida);
    })
    .catch((error) => {
      // Sale mal
      this.cargando = false;
      console.log(error);
      this.respuesta = JSON.stringify(error);
    });
  }

  mostrarEnviarDatos() {
    this.mostrar = 'enviar';
  }

}
