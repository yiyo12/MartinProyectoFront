import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { productsDB } from 'src/app/shared/data/products';
import { OrderItem } from 'src/app/models/oder.item';
import { CartProduct, Product } from 'src/app/models/product.model';
import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []; // que recib al objetoItem que mando y añadir la propiedad de quantity ya sea en el modelo.
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
    // si el producto a agregar es el mismo que alguno que ya tenemos en el arreglo hay que hacer un update al quantity y actualizar el obserable
    this.findSameItems(product);

    /*if (this.productList.value == 0) {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
    }else{
      this.findSameItems(product);
    }*/



    // this.getTotalPrice();
  }

  findSameItems(product) {
    console.log(this.cartItemList.length);
    if (this.cartItemList.length == 0) {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
    } else {
      this.cartItemList.forEach(element => {
        console.log(element);

        if (element.id == product.id) {
          element.quantity++;
        } else {
          this.cartItemList.push(product);
          this.productList.next(this.cartItemList);
        }
      });
    }


  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}
