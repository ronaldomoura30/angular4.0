import { Component, OnInit } from '@angular/core';
import { trigger, state, style } from "@angular/animations"
import { transition, animate, keyframes } from "@angular/animations"
import { FormBuilder, FormControl, FormGroup } from "@angular/forms"

import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/catch";

import {Restaurant} from './restaurant/restaurant.model';
import {RestaurantsService} from './restaurants.service';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
      trigger('toogleSearch', [
        state('hidden', style({
          opacity:0,
          "max-height": "0px"
        })),
        state('visible', style({
          opacity:1,
          "max-height": "70px",
          "margin-top": "20px",
        })),
        transition('* => *', animate('250ms 0s ease-in-out'))
      ])
    ]
})
export class RestaurantsComponent implements OnInit {

  searchForm: FormGroup;
  searchControl: FormControl;
  searchBarState = 'hidden';
  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService,
              private formBuilder: FormBuilder){

  }

  ngOnInit() {
      this.searchControl = this.formBuilder.control('');
      this.searchForm = this.formBuilder.group({
         searchControl: this.searchControl
      })

      this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      //.do(searchTerm => console.log(`q=${searchTerm}`))
      .switchMap(searchTerm =>
        this.restaurantsService
         .restaurants(searchTerm)
         .catch(error => Observable.from([])))
      .subscribe(restaurants => this.restaurants = restaurants);

      this.restaurantsService.restaurants()
        .subscribe(restaurants => this.restaurants = restaurants);

  }

  toogleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible': 'hidden';
  }
}
