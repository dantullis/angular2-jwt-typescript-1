// base imports
import {provideRouter, RouterConfig} from '@angular/router';
// custom imports
import {AuthGuard} from './auth.guard';
import {ChildComponent} from './child.component';
import {HomeComponent} from './home.component';
import {LoginComponent} from './login.component';
import {ParentComponent} from './parent.component';
import {ProtectedComponent} from './protected.component';
import {RegisterComponent} from './register.component';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'home',
    terminal: true
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  {
    path: 'parent',
    component: ParentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'child', component: ChildComponent }
    ]
  },
  { path: 'register', component: RegisterComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthGuard
];