import { Component } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';
import { WebService } from './web.service';


// component decorator
// components are a subset of directives but unlike directives, they always have a template
@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of webService.messages">
            <mat-card class="card">
            <mat-card-header>
                <div mat-card-avatar class="example-header-image"></div>
                <mat-card-title>{{message.owner}}</mat-card-title>
                <mat-card-subtitle>Subtitle</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
                <p>{{message.text}}</p>
            </mat-card-content>
            <mat-card-footer>{{timestamp}}</mat-card-footer>
            <mat-card-actions>
            <button mat-button>LIKE</button>
            <button mat-button>SHARE</button>
            </mat-card-actions>
            </mat-card>
        </div>
    `
})
export class MessagesComponent {
    constructor(private webService: WebService){

    }
}