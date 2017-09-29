import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { BrowserModule } from '@angular/platform-browser';

import { Angular2SocialLoginModule } from "angular2-social-login";
import { NgModule }      from '@angular/core';




      

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  
