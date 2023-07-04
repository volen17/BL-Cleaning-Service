import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoadingService} from "../../../services/loading.service";
import {BlApiService} from "../../../services/bl.api.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  equipmentName: string | undefined;
  equipmentAvailability: number | undefined;
  equipmentPrice: number | undefined;
  equipmentDescription = '';
  imageUrl: string | undefined;

  priceRegex = "^[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*$"
  public urlRegex = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi

  url = new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)]);
  nameFormControl = new FormControl('', [Validators.required]);
  priceFormControl = new FormControl('', [Validators.required, Validators.pattern(this.priceRegex)]);

  constructor(    public blApiService: BlApiService,
                  public loadingService: LoadingService,
                  public router: Router) {}


  ngOnInit() {}

  addEquipment() {
    if (this.equipmentName && this.equipmentPrice && this.imageUrl) {
      this.loadingService.start();
      this.blApiService.addEquipment({
        equipmentName: this.equipmentName,
        equipmentPrice: this.equipmentPrice,
        equipmentDescription: this.equipmentDescription,
        imageUrl: this.imageUrl
      }).subscribe(async equipment => {
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
