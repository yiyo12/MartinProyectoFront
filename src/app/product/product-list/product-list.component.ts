import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart-service/cart-service';
import { ProductService } from 'src/app/services/product-service/product.service';
import { productsDB } from '../../shared/data/products';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  public products : any = [];
  public productDetail;
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
    console.log(this.route.snapshot.params['id']);

  }
  ngOnInit(): void {
 
    this.getProductsApi();
  }


  getProductsApi(){
    this.productService.getProducts().subscribe(res=>{
      this.products = res;
    });
  }
}
