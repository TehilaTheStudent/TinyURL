import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IError } from "../models/error.interface";

@Injectable({
providedIn:'root'
})
export class FunctionsService{
    handleError(error: HttpErrorResponse): Observable<never> {
        // debugger
        console.log('error--- in function service')
        let customError: IError = {
            status: error.status,
            message: 'An unexpected error occurred',
        }
        if (error.error instanceof ErrorEvent) {
            // Client-side or network error
            customError.message = `Client-side error: ${error.error.message}`;
        }
        else {
            if (typeof error.error == "string") {
                customError.error = error.error
            }
            // Backend error
            customError.message = `Server-side error: ${error.message}`;
            customError.details = error.error.message;
        }
        // console.error(customError);
        return throwError(() => customError)
    }
}