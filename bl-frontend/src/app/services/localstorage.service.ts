import {Injectable} from "@angular/core";
import {Equipment} from "../models/Equipment";
import {Service} from "../models/Service";

@Injectable({providedIn: 'root'})
export class LocalStorageService {

  get email() {
    return localStorage.getItem('email');
  }

  setEmail(email: string) {
    localStorage.setItem('email', email);
  }

  get role() {
    return localStorage.getItem('role');
  }

  setRole(role: string) {
    localStorage.setItem('role', role);
  }

  get cart() {
    if (localStorage.getItem('cart')) {
      // @ts-ignore
      return JSON.parse(localStorage.getItem('cart'));
    }
  }

  addGearToCart(gear: Equipment) {
    if (this.cart) {
      if (this.cart.gears.filter((s: Equipment) => s.id == gear.id).length === 0) {
        localStorage.setItem('cart', JSON.stringify({
          gears: [...this.cart.gears, gear],
          services: this.cart.services,
        }));

      }
    } else {
      localStorage.setItem('cart', JSON.stringify({
        gears: [gear],
        services: [],
      }))
    }
    console.log(this.cart)
  }

  addServiceToCart(service: Service) {
    if (this.cart) {
      if (this.cart.services.filter((s: Service) => s.id == service.id).length === 0) {
        localStorage.setItem('cart', JSON.stringify({
          gears: this.cart.gears,
          services: [...this.cart.services, service]
        }));
      }
    } else {
      localStorage.setItem('cart', JSON.stringify({
        gears: [],
        services: [service],
      }))
    }
    console.log(this.cart)
  }

  clearCart() {
    localStorage.setItem('cart', JSON.stringify({
      gears: [],
      services: [],
    }));
  }
}
