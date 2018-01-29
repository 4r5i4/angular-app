import { Component } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';
import {MatTabsModule} from '@angular/material/tabs';



// component decorator
// components are a subset of directives but unlike directives, they always have a template
@Component({
    selector: 'navbar',
    template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/">Message Board</button>
            <button mat-button routerLink="/messages">Messages</button>
        </mat-toolbar>
        `
})
export class NavComponent {
    constructor(){

    }
}