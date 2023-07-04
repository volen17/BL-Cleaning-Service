import { Component, OnInit } from '@angular/core';
import {BlApiService} from "../../../services/bl.api.service";
import {LoadingService} from "../../../services/loading.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../services/localstorage.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackDescription = '';
  email = '';

  constructor(public blApiService: BlApiService,
              public loadingService: LoadingService,
              public localStorage: LocalStorageService,
              public router: Router) { }

  ngOnInit(): void {
  }

  addFeedback() {
    if(this.localStorage.email) {
      this.loadingService.start();
      this.blApiService.addFeedback({
        description: this.feedbackDescription,
        email: this.localStorage.email,
      }).subscribe(async feedback => {
        await this.router.navigate([`catalogue`]);
        this.loadingService.stop();
      });
    }
  }
}
