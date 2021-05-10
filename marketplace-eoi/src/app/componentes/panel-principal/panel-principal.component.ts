import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit {

  loggedUserName: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.loggedUserName=this.authService.getUserName;

  }

}
