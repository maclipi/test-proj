import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';


export const router : Routes =[

{path:'', redirectTo:'',pathMatch:'full'},
{path:'anrag', component:WelcomeComponent}

];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);