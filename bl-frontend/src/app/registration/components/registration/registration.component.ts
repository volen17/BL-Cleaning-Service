import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {BlApiService} from "../../../services/bl.api.service";
import {LoadingService} from "../../../services/loading.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../services/localstorage.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)]);

  matcher = new MyErrorStateMatcher();

  email: string | undefined;
  password: string | undefined;
  confirmedPassword: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  role = 'Client';
  team = '';

  constructor(
    public blApiService: BlApiService,
    public loadingService: LoadingService,
    public localStorageService: LocalStorageService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  saveUser(event: Event) {
    event.preventDefault();

    if(this.email && this.password && this.confirmedPassword && this.firstName && this.lastName) {
      this.loadingService.start();
      this.blApiService.saveUser({
        email: this.email,
        password: this.password,
        confirmedPassword: this.confirmedPassword,
        firstName: this.firstName,
        lastName: this.lastName,
        role: this.role,
        team: this.team
      }).subscribe({
        next: async (user) => {
          if(this.localStorageService.role!='admin'){
            this.localStorageService.setEmail(user.email);
            this.localStorageService.setRole(user.role);
            await this.router.navigate([`catalogue`]);
            this.loadingService.stop();
          } else {
            await this.router.navigate([`moderate`]);
            this.loadingService.stop();
          }
        },
        error: (err) => {
          this.loadingService.stop();
        }}
      );
    }
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
