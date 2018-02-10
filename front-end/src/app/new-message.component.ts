import { Component } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';
import { WebService } from './web.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';


// component decorator
// components are a subset of directives but unlike directives, they always have a template
@Component({
    selector: 'new-message',
    template: `
    <mat-card class="newcard">
        <mat-form-field>
            <input required [formControl]="name" [(ngModel)]="newMessage.owner" matInput type="text" placeholder="Name">
            <mat-error *ngIf="name.invalid">{{getErrorMessage()}}</mat-error>
        </mat-form-field>

        <mat-form-field class="input-width">
            <textarea required [formControl]="text" [(ngModel)]="newMessage.text" matInput placeholder="Message"></textarea>
            <mat-error *ngIf="text.invalid">{{getErrorMessage()}}</mat-error>
        </mat-form-field>

        <mat-card-actions>
            <button mat-raised-button color="primary"(click)="post()" disabled={{fieldsNotEmpty()}}>POST</button>
        </mat-card-actions>
    </mat-card>
`
})
export class NewMessageComponent {


    constructor(private webService: WebService){}

    newMessage = {
        owner: '',
        text:   ''
    };
    name = new FormControl('', Validators.required);
    text = new FormControl('', Validators.required);

    // _clearNewMessageInputs() {
    //     this.newMessage.owner = '';
    //     this.newMessage.text = '';

    // }

    getErrorMessage() {
        return 'You must enter a value';
    }

    fieldsNotEmpty() {
        return _.isEmpty(this.newMessage.owner.trim()) || _.isEmpty(this.newMessage.text.trim());
    }

    post() {
        this.webService.postMessage(this.newMessage);
        // this._clearNewMessageInputs();
    }
}

