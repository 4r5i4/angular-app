import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent {
    email = new FormControl('', [Validators.required, Validators.email]);
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
    }

}
