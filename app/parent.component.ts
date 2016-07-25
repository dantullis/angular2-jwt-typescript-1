// base imports
import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: "parent",
  template: `
    The parent route is protected by the CanActivate guard
    <br><br>
    <router-outlet></router-outlet>
  `,
})
export class ParentComponent {}
