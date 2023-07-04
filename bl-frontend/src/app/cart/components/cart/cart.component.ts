import {Component, OnInit} from '@angular/core';
import {LoadingService} from "../../../services/loading.service";
import {Router} from "@angular/router";
import {BlApiService} from "../../../services/bl.api.service";
import {LocalStorageService} from "../../../services/localstorage.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  paymentMethod = 'Cash';
  orderAddress = '';
  phoneNumber = '';
  minDate: Date;
  orderCreated = false;

  nameFormControl = new FormControl('', [Validators.required]);

  time: Date | undefined;
  orderDate = new FormControl(new Date());

  constructor(
    private blApiService: BlApiService,
    public localStorage: LocalStorageService,
    public router: Router,
    public loadingService: LoadingService,
  ) {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate()-2);
    console.log(this.minDate);
  }

  ngOnInit(): void {
  console.log(this.localStorage.cart)
  }

  combineDateTime() {
    const newTime = new Date(
      this.orderDate.value.getFullYear(),
      this.orderDate.value.getMonth(),
      this.orderDate.value.getDate(),
      this.time?.getHours(),
      this.time?.getMinutes(),
      this.time?.getSeconds(),
      this.time?.getMilliseconds()
    )
    console.log(newTime);
    return newTime;
  }

  createOrder() {
    if(this.localStorage.cart && this.localStorage.email) {
      this.loadingService.start();
      this.blApiService.createOrder({
        orderDate: this.combineDateTime(),
        equipments: this.localStorage.cart.gears,
        services: this.localStorage.cart.services,
        email: this.localStorage.email,
        paymentMethod: this.paymentMethod,
        orderAddress: this.orderAddress,
        phoneNumber: this.phoneNumber
      }).subscribe(async response => {
        if(this.paymentMethod==='Card') {
          await this.router.navigate([`payment`]);
        }
        this.orderCreated=true;
        this.loadingService.stop();
        this.localStorage.clearCart();
      });
    }
  }

  async navigate(url: string) {
    return this.router.navigate([url]);
  }
}

