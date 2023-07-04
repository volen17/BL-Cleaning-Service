import {Component, OnInit} from '@angular/core';
import {LoadingService} from "../../../services/loading.service";
import {Router} from "@angular/router";
import {BlApiService} from "../../../services/bl.api.service";
import {Equipment} from "../../../models/Equipment";
import {Service} from "../../../models/Service";
import {LocalStorageService} from "../../../services/localstorage.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  services: Service[] = [];
  equipment: Equipment[] = [];
  hoveredCardId: string | undefined = undefined;

  constructor(
    private blApiService: BlApiService,
    public loadingEquipmentService: LoadingService,
    public loadingServicesService: LoadingService,
    public localStorage: LocalStorageService,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.loadingEquipmentService.start();
    this.loadingServicesService.start();
    this.blApiService.getServices().subscribe(data => {
      console.log(data)
      data.forEach(x => this.services?.push(x));
      this.loadingServicesService.stop();
    });
    this.blApiService.getEquipment().subscribe(data => {
      data.forEach(x => this.equipment?.push(x));
      this.loadingEquipmentService.stop();
    });
    console.log(this.localStorage.cart)
  }

  toggleServiceHover(serviceId: number) {
    this.hoveredCardId = `service-${serviceId}`;
    console.log(this.hoveredCardId)
  }

  toggleEquipmentHover(equipmentId: number) {
    this.hoveredCardId = `equipment-${equipmentId}`;
  }

  removeHover() {
    console.log('here')
    this.hoveredCardId = undefined;
  }

  async navigate(url: string) {
    return this.router.navigate([url]);
  }
}

