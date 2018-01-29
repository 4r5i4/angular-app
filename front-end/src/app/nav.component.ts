import { Component } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';



// component decorator
// components are a subset of directives but unlike directives, they always have a template
@Component({
    selector: 'navbar',
    template: `
        <mat-toolbar color="primary">
            message board
        </mat-toolbar>
    `
})
export class NavComponent {
    constructor(){

    }
}