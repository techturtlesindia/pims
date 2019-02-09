import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private token: ApiService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set("Authorization", 'Bearer ' + token) });
        }
        return next.handle(authReq);
    }
}

