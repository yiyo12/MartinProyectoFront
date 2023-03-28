import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderItem } from 'src/app/models/oder.item';
//import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product-service/product.service';
import { CartService } from '../../services/cart-service/cart-service';

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products = [];
  public productDetail;
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
    console.log(this.route.snapshot.params['id']);

  }

  ngOnInit(): void {


    this.getProductById();
  }

  getProductById() {

    this.productDetail = this.productService.getProductsById(this.route.snapshot.params['id']);
    console.log(this.productDetail);
    

    
  }

  addProduct1(pro) {

    pro.quantity = 1;//propiedad hardCodificada solo para tener el atributo cantidad, esto deberia estar en un modelo despues
    this.cartService.addtoCart(pro);

  }


  


}
