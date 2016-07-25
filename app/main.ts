// custom imports
import {AppComponent} from "./app.component";
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {AuthService} from "./auth.service";
import {RegisterService} from "./register.service";

// base imports
import {HTTP_PROVIDERS} from "@angular/http";
import {bootstrap} from "@angular/platform-browser-dynamic";
import "rxjs/RX";

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    AuthService,
    RegisterService,
])
    .catch(err => console.error(err));
