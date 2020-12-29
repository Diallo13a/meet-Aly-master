import { Injectable } from '@angular/core';

export interface User{
  id: number;
  nom: string;
  prenom: string;
  role: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    {id: 1, nom: 'Diallo', prenom: 'Oumar', email: 'oumar@gmail.com', password: 'passer', role: 'ADMIN'},
    {id: 2, nom: 'Ndoye', prenom: 'Khalifa', email: 'khalifa@gmail.com', password: 'passer', role: 'CLIENT'},
    {id: 3, nom: 'Ly', prenom: 'Ibrahima', email: 'ly@gmail.com', password: 'passer', role: 'CLIENT'}
  ];
  constructor() { }
  findUserById(id: number): User{
    const user = this.users.find(
      (u: User) => {
        return u.id === id;
      }
    );
    return user;
  }
  getUserByEmailAndPassword(email: string, password: string): User{
    const user = this.users.find(
      (u: User) => {
        return u.email === email && u.password === password;
      }
    );
    return user;
  }
}
