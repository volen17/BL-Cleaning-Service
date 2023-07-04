import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import {MatCardModule} from "@angular/material/card";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    CatalogueComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    CatalogueComponent
  ]
})
export class CatalogueModule { }
