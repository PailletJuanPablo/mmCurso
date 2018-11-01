import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.css']
})
export class DetallePostComponent implements OnInit {

  idRecibido: string;
  post;
  constructor(public rutaActiva: ActivatedRoute, public http: HttpClient) { }

  ngOnInit() {
    this.idRecibido = this.rutaActiva.snapshot.params['id'];
    this.http.get('https://jsonplaceholder.typicode.com/posts/' + this.idRecibido)
    .toPromise()
    .then((respuesta) => {
      console.log(respuesta);
      this.post = respuesta;
    });
  }

}
