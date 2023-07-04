import { RegistrationComponent } from './components/registration/registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    RegistrationComponent
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSelectModule,
    ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
