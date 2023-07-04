import {NgModule} from '@angular/core';
import {CartComponent} from './components/cart/cart.component';
import {RouterModule} from "@angular/router";
import {CommonModule, DatePipe} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {NgxMatDatetimePickerModule, NgxMatTimepickerModule} from "@angular-material-components/datetime-picker";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {MatSelectModule} from "@angular/material/select";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {DateTimePickerModule} from "@syncfusion/ej2-angular-calendars";


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
// MatMomentDateModule, // either this or MatNativeDateModule
    MatNativeDateModule,
    DateTimePickerModule
  ],
  exports: [
    CartComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    DatePipe
  ],
})
export class CartModule {
}
