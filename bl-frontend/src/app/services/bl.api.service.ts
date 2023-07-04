import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser, User } from '../models/User';
import {Equipment, NewEquipment} from "../models/Equipment";
import {NewService, Service} from "../models/Service";
import {Feedback, NewFeedback} from "../models/Feedback";
import {Order, ViewOrder} from "../models/Order";

const SEPARATOR = '/';

@Injectable({
  providedIn: 'root',
})
export class BlApiService {
  private readonly _url = 'http://localhost:8081';

  constructor(private readonly httpClient: HttpClient) {}

  public addEquipment(equipment: NewEquipment) {
    return this.httpClient.post<Equipment>(this._url + SEPARATOR + 'equipment', equipment, {})
  }

  public addService(service: NewService) {
    return this.httpClient.post<Service>(this._url + SEPARATOR + 'services', service, {})
  }

  public saveUser(user: User) {
    return this.httpClient.post<User>(this._url + SEPARATOR + 'users', user, {})
  }

  public addFeedback(newFeedback: NewFeedback) {
    return this.httpClient.post<Feedback>(this._url + SEPARATOR + 'feedbacks', newFeedback, {})
  }

  public login(loginUser: LoginUser) {
    return this.httpClient.post<User>(this._url + SEPARATOR + 'users' + SEPARATOR + 'login', loginUser, {});
  }

  public getServices() {
    return this.httpClient.get<Service[]>(this._url + SEPARATOR + 'services');
  }

  public getFeedbacks() {
    return this.httpClient.get<Feedback[]>(this._url + SEPARATOR + 'feedbacks');
  }

  public getEquipment() {
    return this.httpClient.get<Equipment[]>(this._url + SEPARATOR + 'equipment');
  }

  public createOrder(order: Order) {
    return this.httpClient.post(this._url + SEPARATOR + 'orders', order, {});
  }

  public getAllOrdersToday() {
    return this.httpClient.get<ViewOrder[]>(this._url + SEPARATOR + 'orders');
  }

  public getAllOrdersTodayByEmail(email: string) {
    return this.httpClient.get<ViewOrder[]>(this._url + SEPARATOR + 'orders' + SEPARATOR + email);
  }
}
