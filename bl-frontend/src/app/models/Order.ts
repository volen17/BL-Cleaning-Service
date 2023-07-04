import {Service} from "./Service";
import {Equipment} from "./Equipment";
import {Team} from "./Team";

export interface Order {
  orderDate: Date;
  services: Service[];
  equipments: Equipment[];
  email: String;
  paymentMethod: String;
  orderAddress: String;
  phoneNumber: String;
}

export interface ViewOrder {
  id: number;
  orderMade: Date;
  orderDate: Date;
  price: number;
  method: string;
  orderAddress: String;
  phoneNumber: String;
  equipmentList: Equipment[];
  serviceList: Service[];
  team: Team;
}
