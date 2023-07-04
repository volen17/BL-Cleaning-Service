import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentComponent} from "./components/payment/payment.component";
import {NgPaymentCardModule} from "ng-payment-card";

@NgModule({
  declarations: [
    PaymentComponent
  ],
    imports: [
        CommonModule,
        NgPaymentCardModule
    ],
  exports: [
    PaymentComponent
  ]
})
export class PaymentModule { }
