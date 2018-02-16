import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/rx';


@Injectable()
/**
 * privides services to the messages component -- decoupling UI and services
 */
export class WebService {
    BASE_URL = 'http://localhost:3000/api';
    private messages = [];
    messageSubject = new Subject();
    constructor(private http: Http, private sb: MatSnackBar){
        // it's guaranteed that by the time we are calling our service, we have a response back
        // from getMessages(), we don't have to wait for another component to initially trigger it.
        this.getMessages(name);
    }
    /**
     * returns msgs once we get them via HTTP call
     * we need access to the angular HTTP service
     * To use the Http, we will need to have it injected into the class constructor
     */
    getMessages(user) {
            user = user ? '/' + user : '';
            var response = this.http.get( this.BASE_URL + '/messages' + user).subscribe(res => {
                this.messages = res.json();
                this.messageSubject.next(this.messages);
            }, error => {
                this.handleError('Unable to get messages');
            });

    }

    async postMessage(newMessage){
        try {
            var response = await this.http.post( this.BASE_URL + '/messages', newMessage).toPromise();
            this.messages.push(response.json());
        } catch (error) {
            this.handleError('Unable to post a message');
        }
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', {duration: 4000} )
    }
}
