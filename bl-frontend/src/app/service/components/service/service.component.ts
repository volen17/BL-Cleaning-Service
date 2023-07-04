import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {BlApiService} from "../../../services/bl.api.service";
import {LoadingService} from "../../../services/loading.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  serviceName: string | undefined;
  servicePrice: number | undefined;
  serviceDescription = '';
  imageUrl: string | undefined;
  public urlRegex = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi

  url = new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)]);

  priceRegex = "^[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*$"

  nameFormControl = new FormControl('', [Validators.required]);
  priceFormControl = new FormControl('', [Validators.required, Validators.pattern(this.priceRegex)]);

  constructor(public blApiService: BlApiService,
              public loadingService: LoadingService,
              public router: Router) {
  }

  ngOnInit() {
  }

  addService() {
    if (this.serviceName && this.servicePrice && this.imageUrl) {
      this.loadingService.start();
      this.blApiService.addService({
        serviceName: this.serviceName,
        servicePrice: this.servicePrice,
        serviceDescription: this.serviceDescription,
        imageUrl: this.imageUrl
      }).subscribe(async service => {
        console.log(service);
        await this.router.navigate([`catalogue`]);
        this.loadingService.stop();
      });
    }
  }

  markTouched() {
    this.url.markAsTouched();
    this.url.updateValueAndValidity();
  }
}
