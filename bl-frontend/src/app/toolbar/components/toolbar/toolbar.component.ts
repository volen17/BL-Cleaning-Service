import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../services/localstorage.service";

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isCreateDoodleOpened = false;

  constructor(
    public router: Router,
    public localStorageService: LocalStorageService,
  ) {}

  async navigate(url: string) {
    return this.router.navigate([url]);
  }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear();
  }
}
