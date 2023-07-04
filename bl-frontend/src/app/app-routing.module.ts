import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/components/homepage/homepage.component";
import {LoginComponent} from "./login/components/login/login.component";
import {CatalogueComponent} from "./catalogue/components/catalogue/catalogue.component";
import {RegistrationComponent} from "./registration/components/registration/registration.component";
import {CartComponent} from "./cart/components/cart/cart.component";
import {FeedbackComponent} from "./feedback/components/feedback/feedback.component";
import {ViewFeedbacksComponent} from "./feedback/components/view-feedbacks/view-feedbacks.component";
import {ModerateComponent} from "./moderate/components/moderate/moderate.component";
import {EquipmentComponent} from "./equipment/components/equipment/equipment.component";
import {ServiceComponent} from "./service/components/service/service.component";
import {ViewOrdersComponent} from "./orders/components/view-orders/view-orders.component";
import {PaymentComponent} from "./payment/components/payment/payment.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'cart', component: CartComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'feedbacks', component: ViewFeedbacksComponent },
  { path: 'moderate', component: ModerateComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'orders', component: ViewOrdersComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
