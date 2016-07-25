// base imports
import {ControlGroup, FORM_DIRECTIVES, FormBuilder, NgIf, Validators} from "@angular/common";
import {Component} from "@angular/core";
// import {Headers, Http} from "@angular/http";
import {Router} from "@angular/router";

// custom imports
import {RegisterService} from "./register.service";

@Component({
  directives: [FORM_DIRECTIVES, NgIf],
  selector: "register",
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
  `,
})

export class RegisterComponent {
  private form: ControlGroup;
  // private error: boolean = false;
  private registered: boolean = false;

  constructor(fb: FormBuilder, public registerService: RegisterService, public router: Router) {
    this.form = fb.group({
      password: ["", Validators.required],
      username: ["", Validators.required],
    });
  }

  public onSubmit(value: any) {
    this.registerService.regUser(value.username, value.password).subscribe((result) => {
      if (result) {
        this.registered = true;
        this.router.navigate(["home"]);
      }
    });
  }
}
