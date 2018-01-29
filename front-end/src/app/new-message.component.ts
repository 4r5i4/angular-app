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
    template: './templates/new-message-template.html'
})
export class NewMessageComponent {

   
    constructor(private webService: WebService){}

    newMessage = {
        owner: "",
        text:   ""
    }
    name = new FormControl('', Validators.required);
    text = new FormControl('', Validators.required);
    
    getErrorMessage() {
        return 'You must enter a value';
    }

    fieldsNotEmpty() {
        return _.isEmpty(this.newMessage.owner.trim()) || _.isEmpty(this.newMessage.text.trim());
    }

    post(){
        this.webService.postMessage(this.newMessage);
    }
}

