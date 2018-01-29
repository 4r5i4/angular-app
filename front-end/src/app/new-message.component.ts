import { Component} from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';
import { WebService } from './web.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// component decorator
// components are a subset of directives but unlike directives, they always have a template
@Component({
    selector: 'new-message',
    template: `
    <mat-card class="newcard">

        <mat-form-field>
            <input name="name" [(ngModel)]="newMessage.owner" matInput type="text" placeholder="Name" />
        </mat-form-field>
        
        <mat-form-field class="input-width">
            <textarea [(ngModel)]="newMessage.text" matInput placeholder="Message"></textarea>
        </mat-form-field>

        <mat-card-actions>
            <button mat-raised-button color="primary"(click)="post()">POST</button>
        </mat-card-actions>
    </mat-card>
    `
})
export class NewMessageComponent {

   
    constructor(private webService: WebService){}
    testOwner = "test";
    newMessage = {
        owner: "",
        text:   ""
    }
    post(){
        this.webService.postMessage(this.newMessage);
    }
}

