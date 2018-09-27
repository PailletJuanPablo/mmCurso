import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  numero: Number;
  nombre: String = "Juan";
  booleano: Boolean;
  productos;
  constructor() {
    this.productos = [
      {
        nombre: "producto 1",
      },
      {
        nombre: "producto 2"
      }
    ];

  }


  funcion1() {
    alert("hola " + this.nombre);
  }

  saludarConParametros(nombre, apellido) {
    alert("Hola " + nombre + " " + apellido);
  }

}
