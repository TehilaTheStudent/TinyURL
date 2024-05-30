import { HttpClient } from "@angular/common/http";
import { FunctionsService } from "./functions.service";
import { UserModel } from "../models/user.model";
import { Observable, catchError } from "rxjs";
import { AuthService } from "./auth.service";
import { LinkModel } from "../models/link.model";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    constructor(
        private httpClient: HttpClient,
        private functionsService:FunctionsService,
        private authService:AuthService
    ) { }
    private baseUrl:string='http://localhost:5000/'

    getUserByToken():Observable<UserModel>{
        console.log('🖥️ getUserByToken')
        return this.httpClient.get<UserModel>(this.baseUrl+'user',{headers:this.authService.getToken()}).pipe(
            catchError(this.functionsService.handleError)
        )
    }

    getUserLinks():Observable<LinkModel[]>{
        console.log('🖥️ getUserLinks')
        return this.httpClient.get<LinkModel[]>(this.baseUrl+'user/links',{headers:this.authService.getToken()}).pipe(
            catchError(this.functionsService.handleError)
        )
    }
}