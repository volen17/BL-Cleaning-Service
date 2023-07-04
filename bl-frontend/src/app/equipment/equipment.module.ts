import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentComponent } from './components/equipment/equipment.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    EquipmentComponent,
  ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        RouterModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
        MatSelectModule
    ],
  exports: [
    EquipmentComponent
  ]
})
export class EquipmentModule { }
