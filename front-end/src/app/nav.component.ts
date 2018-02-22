import { Component } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';
import { MatTabsModule } from '@angular/material/tabs';
import { WebService } from './web.service';
import { AuthService } from './auth.service';



// component decorator
// components are a subset of directives but unlike directives, they always have a template
@Component({
    selector: 'navbar',
    template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/">Message Board</button>
            <button mat-button routerLink="/messages">Messages</button>
            <button mat-raised-button color="warn" routerLink="/delete" (click)="deleteDelegate()">Delete All Messages</button>
            <span class="example-fill-remaining-space"></span>
            <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/login">login</button>
            <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/register">Register</button>
            <button mat-button color="warn" *ngIf="authService.isAuthenticated" >Welcome {{authService.name}}</button>
            <button mat-button *ngIf="authService.isAuthenticated" (click)="authService.logout()" >Logout</button>
        </mat-toolbar>
        `
})
export class NavComponent {
    constructor(private webService: WebService, private authService: AuthService) {}
    deleteDelegate() {
        this.webService.deleteAllMessages();
    }
}
