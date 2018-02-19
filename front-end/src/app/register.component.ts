import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';


@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent {
    email = new FormControl('', [Validators.required, Validators.email]);
    firstName = new FormControl('', Validators.required);
    lastName = new FormControl('', Validators.required);
    password = new FormControl('', Validators.required);
    confirmPassword = new FormControl('', Validators.required);

    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
    }
    getTextErrorMessage() {
        return 'You must enter a value';
    }
    /**
     * TODO: check passwords match
     * disable register btn if one field is missing 
     * 
     */



}
