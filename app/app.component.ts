// custom imports
import {NavBarComponent} from "./nav-bar.component";

// base imports
import {Component} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    directives: [NavBarComponent, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS],
    selector: "my-app",
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `,
})

export class AppComponent { }
