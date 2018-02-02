import {NgModule} from '@angular/core'

import {OrderService} from '../order/order.service'
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.services'
import {RestaurantsService} from '../restaurants/restaurants.service'

@NgModule({
  providers: [OrderService, ShoppingCartService, RestaurantsService]
})

export class CoreModule{

}
