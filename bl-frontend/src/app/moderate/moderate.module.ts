import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModerateComponent } from './components/moderate/moderate.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ModerateComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    ModerateComponent
  ]
})
export class ModerateModule { }
