import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-jumbutrum',
  templateUrl: './jumbutrum.component.html',
  styleUrls: ['./jumbutrum.component.css']
})
export class JumbutrumComponent implements OnInit {

  constructor(private authService: AuthService  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.authService.login('');
  }

  onLogout() {
    this.authService.logout();
  }
}
