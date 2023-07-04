import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    ViewOrdersComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule
  ]
})
export class OrdersModule { }
