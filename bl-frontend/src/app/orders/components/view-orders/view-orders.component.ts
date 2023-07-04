import { Component, OnInit } from '@angular/core';
import {BlApiService} from "../../../services/bl.api.service";
import {LocalStorageService} from "../../../services/localstorage.service";
import {LoadingService} from "../../../services/loading.service";
import {Router} from "@angular/router";
import {ViewOrder} from "../../../models/Order";

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.scss']
})
export class ViewOrdersComponent implements OnInit {
  orders: ViewOrder[] = [];

  constructor(
    private blApiService: BlApiService,
    public localStorageService: LocalStorageService,
    public loadingService: LoadingService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(this.localStorageService.role === 'admin') {
      this.loadingService.start();
      this.blApiService.getAllOrdersToday().subscribe(orders => {
        this.loadingService.stop();
        this.orders = orders;
        console.log(this.orders)
      });
    } else if(this.localStorageService.role !== 'Client' && this.localStorageService.email) {
      this.blApiService.getAllOrdersTodayByEmail(this.localStorageService.email).subscribe(orders => {
        this.loadingService.stop();
        this.orders = orders;
        console.log(this.orders)
      });
    } else {
      this.navigate('/');
    }
  }


  async navigate(url: string) {
    return this.router.navigate([url]);
  }


}
