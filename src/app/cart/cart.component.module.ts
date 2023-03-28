import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from '../cart/cart.routing.module';
import { SharedModule } from '../shared/shared.module';

import { HttpClientJsonpModule } from '@angular/common/http';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, SharedModule,  HttpClientJsonpModule],
  exports: []
})
export class CartModule {}
