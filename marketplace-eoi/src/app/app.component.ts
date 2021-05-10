import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marketplace-eoi';

  constructor(private auth: AuthService){

  }


  checkLogin():boolean{
    //TODO
    //return this.auth.getIsLogged;
    return true;
  }
}
