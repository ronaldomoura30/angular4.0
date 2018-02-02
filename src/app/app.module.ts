import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ROUTES} from './app.routers'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
//import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.services';
//import { OrderService } from "./order/order.service";
//import { RestaurantsService} from './restaurants/restaurants.service';
//import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
//import { OrderComponent } from './order/order.component';
//import { OrderItemsComponent } from './order/order-items/order-items.component'
//import { AboutComponent } from './about/about.component';
//import { InputComponent } from './shared/input/input.component';
//import { RadioComponent } from './shared/radio/radio.component';
//import { RatingComponent } from './shared/rating/rating.component'
//import {CoreModule} from './core/core.module'

import {SharedModule} from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSumaryComponent,
//  OrderComponent,
//  OrderItemsComponent,
//  DeliveryCostsComponent,
//  AboutComponent,
//  InputComponent,
//  RadioComponent,
//  RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
//  CoreModule,
//  FormsModule,
//  ReactiveFormsModule,
  ],
//  providers: [RestaurantsService, ShoppingCartService, OrderService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
 providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
