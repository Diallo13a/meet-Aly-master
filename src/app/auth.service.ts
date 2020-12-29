import { Injectable } from '@angular/core';
import {User, UsersService} from './users.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;
  connectedUser: User;
  private usersService: any;
  constructor(usersService: UsersService) { }
  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 1000);
      }
    );
    return promise;
  }
  login(email: string= '', pwd: string = ''){
    this.connectedUser = this.usersService.getUserByEmailAndPassword(email, pwd);
    // tslint:disable-next-line:triple-equals
    if (this.connectedUser || (email == '' && pwd == '')){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
  }
  logout(){
    this.loggedIn = false;
    this.connectedUser = null;
  }
}
