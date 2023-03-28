import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //Establecer la dirrecion en una variable es mejor, porque si contamos con un provedor 
  //o un server aqui pondriamos la direccion IP o dominio
  //SERVER  Producction
  //

  //PRODUCCION

  //DESARROLLO
  public API_URI = 'http://localhost:8000/api/user';


  getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.http.get<any>(this.API_URI).subscribe((res) => {
        console.log(res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });//promise

  }
}
