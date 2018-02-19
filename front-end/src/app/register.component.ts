import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

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
    constructor(private fb: FormBuilder){
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }
    email = new FormControl('', [Validators.required, Validators.email]);
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
    }
    onSubmit(){
        console.log(this.form);
        console.log(this.form.valid);
    }
    // custom validattion and error handling
    isValid(control){
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }

}
