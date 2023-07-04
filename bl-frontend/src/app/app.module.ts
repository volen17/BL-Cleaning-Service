import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToolbarModule} from "./toolbar/toolbar.module";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HomepageModule} from "./homepage/homepage.module";
import {LoginModule} from "./login/login.module";
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {RegistrationModule} from "./registration/registration.module";
import {ModerateModule} from "./moderate/moderate.module";
import {EquipmentModule} from "./equipment/equipment.module";
import {ServiceModule} from "./service/service.module";
import {FeedbackModule} from "./feedback/feedback.module";
import {CatalogueModule} from "./catalogue/catalogue.module";
import {CartModule} from "./cart/cart.module";
import {OrdersModule} from "./orders/orders.module";
import {NgxMatNativeDateModule} from "@angular-material-components/datetime-picker";
import {PaymentModule} from "./payment/payment.module";
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    NoopAnimationsModule,
    HomepageModule,
    RegistrationModule,
    LoginModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ModerateModule,
    EquipmentModule,
    ServiceModule,
    FeedbackModule,
    CatalogueModule,
    CartModule,
    OrdersModule,
    NgxMatNativeDateModule,
    PaymentModule,
    DateTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
