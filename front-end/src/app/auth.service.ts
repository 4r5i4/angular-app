import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class AuthService {
    BASE_URL = 'http://localhost:3000/auth';
    constructor(private http: Http){

    }
    register(user){
        // We should delete the confirmPassword as it is only a fron-end verification:
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe();
    }
}
