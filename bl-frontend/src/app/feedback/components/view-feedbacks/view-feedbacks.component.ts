import { Component, OnInit } from '@angular/core';
import {BlApiService} from "../../../services/bl.api.service";
import {LoadingService} from "../../../services/loading.service";
import {LocalStorageService} from "../../../services/localstorage.service";
import {Router} from "@angular/router";
import {Feedback} from "../../../models/Feedback";

@Component({
  selector: 'app-view-feedbacks',
  templateUrl: './view-feedbacks.component.html',
  styleUrls: ['./view-feedbacks.component.scss']
})
export class ViewFeedbacksComponent implements OnInit {
  feedbackList: Feedback[] = [];

  constructor(public blApiService: BlApiService,
              public loadingService: LoadingService,
              public localStorage: LocalStorageService,
              public router: Router) { }

  ngOnInit(): void {
    this.blApiService.getFeedbacks().subscribe({
      next: (feedback) => {

        this.feedbackList = feedback;
        console.log(feedback);
        console.log(this.feedbackList);
        this.loadingService.stop();
      },
      error: () => {
        this.loadingService.stop();
      },
    });
  }

}
