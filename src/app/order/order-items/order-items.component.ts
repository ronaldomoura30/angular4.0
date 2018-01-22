import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CartItem} from "../../restaurant-detail/shopping-cart/cart-item.model"
@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[]

  @Output() increaseQty =  new EventEmitter<CartItem>()
  @Output() decreaseQty =  new EventEmitter<CartItem>()
  @Output() RemoveQty =  new EventEmitter<CartItem>()
  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem): void {
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CartItem): void{
    this.decreaseQty.emit(item)
  }

  emitRemoveQty(item: CartItem): void{
    this.RemoveQty.emit(item)
  }

}