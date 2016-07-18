// base imports
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/RX';
// custom imports
import {APP_ROUTER_PROVIDERS} from './app.routes';
import {AppComponent} from './app.component';
import {AuthService} from './auth.service';
import {RegisterService} from './register.service';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    AuthService,
    RegisterService
])
    .catch(err => console.error(err));