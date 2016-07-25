// base imports
import {Component} from "@angular/core";

@Component({
  selector: "child",
  template: `
    The child route is protected because the parent route is protected by the CanActivate guard
  `,
})
export class ChildComponent {
}
