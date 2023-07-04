import { Component, OnInit } from '@angular/core';
import {LoadingService} from "../../../services/loading.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-moderate',
  templateUrl: './moderate.component.html',
  styleUrls: ['./moderate.component.scss']
})
export class ModerateComponent implements OnInit {

  constructor(    public loadingService: LoadingService,
                  public router: Router,) { }

  ngOnInit(): void {
  }

  async navigate(url: string) {
    return this.router.navigate([url]);
  }

}
