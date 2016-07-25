// base imports
import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
// import {Observable} from "rxjs/Observable";

@Injectable()
export class RegisterService {
    constructor(private http: Http) { }

    public regUser(userName, password) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http
            .post(
            "http://localhost:8080/user/register",
            JSON.stringify({ userName, password }),
            { headers }
            )
            .map(res => {
                // If request fails, throw an Error that will be caught
                if (res.status < 200 || res.status >= 300) {
                    throw new Error("This request has failed " + res.status);
                } else {
                    // If everything went fine, return the response
                    return res.status;
                }
            });
    }
}
