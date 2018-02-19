import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styles: [
        `
        .error{
            background-color: #008B8B
        }
        `
    ]
})
export class RegisterComponent {
    form;
    constructor(private fb: FormBuilder, private auth: AuthService){
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, emailValid()]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, {validator: matchingFields('password', 'confirmPassword')});
    }
    email = new FormControl('', [Validators.required, Validators.email]);
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
    }
    onSubmit(){
        console.log('this.form:', this.form);
        console.log('this.form.valid', this.form.valid);
        console.log('this.form.errors', this.form.errors);
        this.auth.register(this.form.value);

    }
    // custom validattion and error handling
    isValid(control){
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }

}

function matchingFields(field1, field2) {
    return form => {
        if (form.controls[field1].value !== form.controls[field2].value) {
            return { misMatchedFields: true };
        }
    };
}

function emailValid(){
    return control => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(control.value) ? null : {invalidEmail: true };
    };
}
