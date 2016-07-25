// custom imports
import {AuthGuard} from "./auth.guard";
import {ChildComponent} from "./child.component";
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./login.component";
import {ParentComponent} from "./parent.component";
import {ProtectedComponent} from "./protected.component";
import {RegisterComponent} from "./register.component";

// base imports
import {provideRouter} from "@angular/router";
import {RouterConfig} from "@angular/router";

export const routes: RouterConfig = [
  {
    path: "",
    redirectTo: "home",
    terminal: true,
  },
  { component: HomeComponent, path: "home" },
  { component: LoginComponent, path: "login" },
  { canActivate: [AuthGuard], component: ProtectedComponent, path: "protected" },
  {
    canActivate: [AuthGuard],
    children: [
      { component: ChildComponent, path: "child" },
    ],
    component: ParentComponent,
    path: "parent",
  },
  { component: RegisterComponent, path: "register" },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthGuard,
];
