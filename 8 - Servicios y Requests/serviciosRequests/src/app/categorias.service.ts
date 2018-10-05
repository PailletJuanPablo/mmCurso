import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(public http: HttpClient) { }

  peticionGet() {
    return this.http.get("url").toPromise();
  }
}
