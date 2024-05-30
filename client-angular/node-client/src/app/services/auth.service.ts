import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, map, throwError } from "rxjs";
import { RoleEnum } from "../models/role.enum";
import { FunctionsService } from "./functions.service";

@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient, private router: Router, private functionsService: FunctionsService) { }
    private baseUrl: string = 'http://localhost:5000/login'

    loginToServer(email: string, password: string): Observable<{ role: string }> {
        const credentials = { email: email, password: password }
        return this.httpClient.post<{ token: string, role: string }>(this.baseUrl, credentials).pipe(
            map((response) => {
                console.log('🖥️ loginToServer')
                //   debugger
                localStorage.setItem('token', response.token)
                localStorage.setItem('role', response.role)
                if (response.role == RoleEnum.admin) {
                    this.router.navigate(['/admin'])
                }
                else if (response.role == RoleEnum.user) {
                    this.router.navigate(['/user'])
                }
                return { role: response.role }
            }),
            catchError(this.functionsService.handleError)
        )
    }


    getRole(): string | null {
        return localStorage.getItem('role')
    }
    getToken():HttpHeaders {
        const token: string | null = localStorage.getItem('token')
        if (token == null) {
            debugger
        }
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        return headers
    }
    isAdmin(): boolean {
        const role = this.getRole()
        if (role != null) {
            if (role == RoleEnum.admin) {
                return true
            }
            else {
                return false;
            }
        }
        return false;
    }
    isUser(): boolean {
        const role = this.getRole()
        if (role != null) {
            if (role == RoleEnum.user) {
                return true
            }
            else {
                return false;
            }
        }
        return false;
    }
    isLoggedIn(): boolean {
        return this.isAdmin() || this.isUser()
    }
    emptyStorage(): void {
        localStorage.setItem('token', '')
        localStorage.setItem('role', '')
    }
}