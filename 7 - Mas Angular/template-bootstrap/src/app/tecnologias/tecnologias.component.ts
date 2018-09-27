import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { }

  nombre: string;
  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.params["nombre"];
  }

}
