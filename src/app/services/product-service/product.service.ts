import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { productsDB } from 'src/app/shared/data/products';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    products = [];
    public cartItems = [];
    public productDetail;
  constructor(private http: HttpClient) { 

   // this.products = productsDB.Product;
  }

  //Establecer la dirrecion en una variable es mejor, porque si contamos con un provedor 
  //o un server aqui pondriamos la direccion IP o dominio
  //SERVER  Producction
  //

  //PRODUCCION

  //DESARROLLO
  public API_URI = 'http://localhost:8000/api/product';


  getProduct(): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.http.get<any>(this.API_URI).subscribe((res) => {
        console.log(res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });//promise

  }

  getProducts(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      console.log(res);
      this.products = res;
      return res;
    }))
  }

  getProductsById(id){
    console.log(id);
    let prod = this.products.find(item => item.id == id);
    console.log(prod);
    return prod;
  }

}
