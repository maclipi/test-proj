import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {routes} from './app.router';
import { PubNubAngular } from 'pubnub-angular2';
import { SocketIoModule, SocketIoConfig } from 'ng2-socket-io';
import {scaleLinear} from "d3-scale"; // d3 chart import
const config: SocketIoConfig = { url: 'http://localhost:3000/stream', options: {} };
//node server js


// imported from npm packages social package 
import { Angular2SocialLoginModule } from "angular2-social-login";
import { WelcomeComponent } from './welcome/welcome.component';


/********************CONFIGURE ID FOR THE APPLICATION  START ************************ */

let providers = {
  "google": {
    "clientId": "1084877565753-2tlasd4d3qe4bpnbj63vj1m5t5qi8ogg.apps.googleusercontent.com"
  },
  "facebook": {
    "clientId": "121450598558015",  //Account Kit App Secret 417dab6f22da189f1827e50fb66aa9f3
    xfbml: true,
    "apiVersion": "v2.10" //like v2.4 
  }
};


/********************CONFIGURE ID FOR THE APPLICATION  END ************************ */


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    Angular2SocialLoginModule,
    SocketIoModule.forRoot(config) ,
    scaleLinear,
    routes
  ],
  
  providers: [PubNubAngular],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}   //calling self
 }


 Angular2SocialLoginModule.loadProvidersScripts(providers);