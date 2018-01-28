import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import "rxjs/add/operator/map"

import {ShoppingCartService} from "../restaurant-detail/shopping-cart/shopping-cart.services"
import {CartItem} from "../restaurant-detail/shopping-cart/cart-item.model"
import {Order, OrderItem} from './order.model'

import {MEAT_API} from '../app.api'

@Injectable()
export class OrderService{

  constructor(private cartService: ShoppingCartService, private http: Http){

  }

  itemsValue(): number{
    return this.cartService.total();
  }

  cartItems(): CartItem[]{
    return this.cartService.items;
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item);
  }

  removeItem(item: CartItem){
    this.cartService.removeItem(item);
  }

  clear(){
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<String>{
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post(`${MEAT_API}/orders`,
                            JSON.stringify(order),
                          new RequestOptions({headers: header}))
                    .map(response => response.json())
                    .map(order => order.id);
  }
}
