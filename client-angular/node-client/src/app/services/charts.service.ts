import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable, catchError } from "rxjs";
import { FunctionsService } from "./functions.service";


@Injectable()
export class ChartsService {
    constructor(
        private httpClient: HttpClient,
        private authService: AuthService,
        private functionsService: FunctionsService
    ) { }
//TODO: loading!!!
    private baseUrl: string = "http://localhost:5000/charts"
    getChartByLinkId(linkId: string) :Observable<{data:{labels:string[],datasets:[]}}>{
        console.log("🖥️ getChartByLinkId")
        return this.httpClient.get<{data:{labels:string[],datasets:[]}}>(this.baseUrl +"/link/"+ linkId,{headers: this.authService.getToken()}).pipe(
            catchError(this.functionsService.handleError)
        )
    }
    getCHartsByUserIdFromToken():Observable<{data:{labels:string[],datasets:[]}}>{
        console.log("🖥️ getCHartsByUserIdFromToken")
        return this.httpClient.get<{data:{labels:string[],datasets:[]}}>(this.baseUrl+"/user",{headers: this.authService.getToken()}).pipe(
            catchError(this.functionsService.handleError)
        )

    }
    getCHartsByUserIdFromUserId(userId:string):Observable<{data:{labels:string[],datasets:[]}}>{
        console.log("🖥️ getCHartsByUserIdFromUserId")
        return this.httpClient.get<{data:{labels:string[],datasets:[]}}>(this.baseUrl+"/user/"+userId,{headers: this.authService.getToken()}).pipe(
            catchError(this.functionsService.handleError)
        )
    }
    getChartsForUsers():Observable<{data:{labels:string[],datasets:[]}}>{
        console.log("🖥️ getChartsForUsers")
        return this.httpClient.get<{data:{labels:string[],datasets:[]}}>(this.baseUrl+"/users",{headers: this.authService.getToken()}).pipe(
            catchError(this.functionsService.handleError)
        )

    }


}