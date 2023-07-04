import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ViewFeedbacksComponent } from './components/view-feedbacks/view-feedbacks.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    FeedbackComponent,
    ViewFeedbacksComponent
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
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    FeedbackComponent,
    ViewFeedbacksComponent
  ]
})
export class FeedbackModule { }
