// base imports
import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
// custom imports
import {AuthService} from './auth.service';

@Component({
  selector: 'nav-bar',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/nav-bar.component.html'
})

export class NavBarComponent {
  constructor(private authService: AuthService, private router: Router) {
    this.authService = authService;
    this.router = router;
  }

  getLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
    return false;
  }
}