// base imports
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
// custom imports
import {NavBarComponent} from './nav-bar.component';

@Component({
    selector: 'my-app',
    directives: [NavBarComponent, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS],
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})

export class AppComponent { }