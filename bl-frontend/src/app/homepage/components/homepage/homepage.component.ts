import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoadingService} from "../../../services/loading.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(
    private router: Router,
    public loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
  }

  async navigate(url: string) {
    return this.router.navigate([url]);
  }
}
