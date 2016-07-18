// base imports
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from '@angular/common';
import {Http, Headers} from '@angular/http';
// custom imports
import {RegisterService} from './register.service';

@Component({
  selector: 'register',
  directives: [FORM_DIRECTIVES, NgIf],
  template: `
    <form [ngFormModel]="form" (submit)="$event.preventDefault(); onSubmit(form.value)">
      <div *ngIf="error">Check your password</div>
      <div>
        <label for="username">Username</label>
        <input type="text" ngControl="username">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" ngControl="password">
      </div>
      <div>
        <label for="password">Confirm Password</label>
        <input type="password" ngControl="password">
      </div>
      <div class="form-group">
        <button type="submit" [disabled]="!form.valid">Register</button>
      </div>
    </form>
  `
})

export class RegisterComponent {
  form: ControlGroup;
  error: boolean = false;
  registered: boolean = false;

  constructor(fb: FormBuilder, public registerService: RegisterService, public router: Router) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(value: any) {
    this.registerService.regUser(value.username, value.password).subscribe((result) => {
      if (result) {
        this.registered = true;
        this.router.navigate(['home']);
      }
    });
  }
}