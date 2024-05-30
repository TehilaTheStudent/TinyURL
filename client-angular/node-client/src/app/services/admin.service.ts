import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FunctionsService } from "./functions.service";
import { UserModel } from "../models/user.model";
import { Observable, catchError } from "rxjs";
import { LinkModel } from "../models/link.model";
import { AuthService } from "./auth.service";

@Injectable()
export class AdminService {
    constructor(
        private httpClient: HttpClient,
        private functionsService: FunctionsService,
        private authService:AuthService
    ) { }
    private baseUrl: string = "http://localhost:5000/"

    getAllUsers(): Observable<UserModel[]> {
        console.log('🖥️ getAllUsers')
        return this.httpClient.get<UserModel[]>(this.baseUrl+"users",{headers:this.authService.getToken()}).pipe(
            catchError(this.functionsService.handleError)
        )
      
    }


    getAllLinks(): Observable<LinkModel[]> {
        console.log('🖥️ getAllLinks')
        return this.httpClient.get<LinkModel[]>(this.baseUrl+"links",{headers:this.authService.getToken()}).pipe(
            catchError(this.functionsService.handleError)
        )
    }
}