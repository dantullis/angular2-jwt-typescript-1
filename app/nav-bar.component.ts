// custom imports
import {AuthService} from "./auth.service";

// base imports
import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: "nav-bar",
  templateUrl: "app/nav-bar.component.html",
})

export class NavBarComponent {
  constructor(private authService: AuthService, private router: Router) {
    this.authService = authService;
    this.router = router;
  }

  public getLoggedIn() {
    return this.authService.isLoggedIn();
  }

  public logout() {
    this.authService.logout();
    this.router.navigate([""]);
    return false;
  }
}
