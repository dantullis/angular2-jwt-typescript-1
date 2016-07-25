// custom imports
import {AuthService} from "./auth.service";

// base imports
import {ControlGroup, FORM_DIRECTIVES, FormBuilder, NgIf, Validators} from "@angular/common";
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  directives: [FORM_DIRECTIVES, NgIf],
  selector: "login",
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
  `,
})

export class LoginComponent {
  private form: ControlGroup;
  // private error: boolean = false;
  constructor(fb: FormBuilder, public authService: AuthService, public router: Router) {
    this.form = fb.group({
      password: ["", Validators.required],
      username: ["", Validators.required],
    });
  }

  public onSubmit(value: any) {
    this.authService.login(value.username, value.password).subscribe((result) => {
      if (result) {
        this.router.navigate(["home"]);
      }
    });
  }
}
