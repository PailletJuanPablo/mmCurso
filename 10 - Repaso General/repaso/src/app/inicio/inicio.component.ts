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
  title: string;
  content: string;
  // Donde almacenaremos la respuesta el enviar información
  respuesta: Object;
  constructor(public http: HttpClient) {
  }

  recibirDatos() {
    this.cargando = true;
    this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise()
    .then((datos: Array<{title: string, body: string}>) => {
      this.cargando = false;
      console.log(datos);
      this.posts = datos;
      this.mostrar = 'recibir';
    })
    .catch((error) => {
      this.cargando = false;
      console.log(error);
    });
  }

  enviarDatos() {
    this.cargando = true;
    // Creamos una variable local con let, llamada body, que contendrá los campos a enviar
    const body = {
      title: this.title,
      content: this.content
    };
    // Posteriormente, realizamos la petición y enviamos esta variable como parámetro
    this.http.post('https://jsonplaceholder.typicode.com/posts', body).toPromise()
    .then((res) => {
      this.cargando = false;
      console.log(res);
      this.respuesta = JSON.stringify(res);
    })
    .catch((error) => {
      this.cargando = false;
      console.log(error);
      this.respuesta = JSON.stringify(error);
    });
  }

  mostrarEnviarDatos() {
    this.mostrar = 'enviar';
  }

}
