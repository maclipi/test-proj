import { Component,OnDestroy } from '@angular/core';
import { AuthService } from "angular2-social-login";
import{WelcomeComponent} from "./welcome/welcome.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnDestroy {
  public user;
  
  sub: any;
  showDivider = true ;
 
  constructor(public _auth: AuthService){

    
   }
  

   signIn(provider){
     this.sub = this._auth.login(provider).subscribe(
      (data) => {
        
                  console.log(data);

                  window.localStorage.setItem("userdata",JSON.stringify(data));
                 
                
                  //user data 
                  //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google) 
                }


              
    )
  
  
   
  }


  logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);this.user=null;}
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  
  title = 'app';
}


