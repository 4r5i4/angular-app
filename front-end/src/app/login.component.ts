import { Component } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';
import { MatTabsModule } from '@angular/material/tabs';
import { WebService } from './web.service';
import { AuthService } from './auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';


// component decorator
// components are a subset of directives but unlike directives, they always have a template
@Component({
    selector: 'login',
    template: `
    <mat-card>
    <mat-form-field>
        <input matInput [(ngModel)]="loginData.email" placeholder="Email" type="email">
    </mat-form-field>
    <mat-form-field>
        <input matInput [(ngModel)]="loginData.password" placeholder="Password" type="password">
    </mat-form-field>

    <button mat-raised-button color="primary" (click)="login()">Login</button>
    </mat-card>
    `
})
export class LoginComponent {
    constructor(private authService: AuthService) {}
    loginData = {
        email: '',
        password: ''
    };

    login () {
        // console.log(this.loginData);
        this.authService.login(this.loginData);
    }
}
