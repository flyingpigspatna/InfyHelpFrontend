import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  constructor() { }

  dropdownDeliveryMethod: string[];
  fulfillmentType: string[];

  ngOnInit() {
    this.dropdownDeliveryMethod = ["Express","Standard","Same Day Delivery"];
    this.fulfillmentType = ["Ship to Home","Pickup from Store"];
  }

}
