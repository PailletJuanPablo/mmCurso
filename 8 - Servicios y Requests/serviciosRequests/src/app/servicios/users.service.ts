import { Injectable } from '@angular/core';
// Importamos nuestro servicio
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  // Lo inyectamos en el constructor con un nombre local
  constructor(public http: HttpClient) {}

  obtenerUsuarios() {
   return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();
  }
}
