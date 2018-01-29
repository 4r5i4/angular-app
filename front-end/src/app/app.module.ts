import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { NewMessageComponent } from  './new-message.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatCardModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatInputModule
} from '@angular/material';
import { NavComponent } from './nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatInputModule,
    HttpModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    WebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
