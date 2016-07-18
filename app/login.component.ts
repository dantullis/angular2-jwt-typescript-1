// base imports
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from '@angular/common';
// custom imports
import {AuthService} from './auth.service';

@Component({
  selector: 'login',
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
      <div class="form-group">
        <button type="submit" [disabled]="!form.valid">Login</button>
      </div>
    </form>
  `
})

export class LoginComponent {
  form: ControlGroup;
  error: boolean = false;
  constructor(fb: FormBuilder, public authService: AuthService, public router: Router) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(value: any) {
    this.authService.login(value.username, value.password).subscribe((result) => {
      if (result) {
        this.router.navigate(['home']);
      }
    });
  }
}