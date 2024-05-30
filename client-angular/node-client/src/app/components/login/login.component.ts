import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IError } from "../../models/error.interface";


@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrl: 'login.component.css'
})
export class LoginComponent {
    constructor(private authService: AuthService) { }

    formGroupLogin: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl("", [Validators.required])
    })
    errorLoign?: IError
    emailErrorMessage = '';
    passwordErrorMessage = '';
    updateErrorMessage() {
        if (this.formGroupLogin.controls['email'].hasError('required')) {
            this.emailErrorMessage = 'You must enter a value';
        } else if (this.formGroupLogin.controls['email'].hasError('email')) {
            this.emailErrorMessage = 'Not a valid email';
        } else {
            this.emailErrorMessage = '';
        }



        if (this.formGroupLogin.controls['password'].hasError('required')) {
            this.passwordErrorMessage = 'You must enter a value';
        }
        else {
            this.passwordErrorMessage = '';
        }

    }
    onLogin() {
        if (this.formGroupLogin.valid) {
            const { password, email } = this.formGroupLogin.value
            this.authService.loginToServer(email, password).subscribe(
                (next) => {
                    // debugger
                },
                (error) => {
                    this.errorLoign = error
                },
                () => { }
            )
        }

    }
}