import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';
import { QuestionComponent } from './question/question.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { JeopardyComponent } from './jeopardy/jeopardy.component';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2/angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    JeopardyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule,
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
