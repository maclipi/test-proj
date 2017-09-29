import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { PubNubAngular } from 'pubnub-angular2';
import { Socket } from 'ng2-socket-io';

import  './external.js';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name :string;

  
userName:string;
userEmail:string;
userPic:string;
public myNumber : number;   

  constructor(public comp: AppComponent,
    public pubnub: PubNubAngular,
    private socket: Socket) { }

    getMessage() {
      return this.socket
          .fromEvent("message");
  }

  ngOnInit() {

  
 
    console.log("Welcome Component");
    

    var userObject = window.localStorage.getItem("userdata");


var fun =  JSON.parse(userObject);

console.log(fun);
if (fun != null)
{
  console.clear();
  this.comp.showDivider = false;
  console.clear();
  
}
console.clear();
this.userName = fun.name;
this.userEmail = fun.email;
this.userPic = fun.image;
this.myNumber = 5;


    console.log(this.getMessage());

  }

  username =this.name;

}
