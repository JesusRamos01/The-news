import { Injectable } from '@angular/core';
import { IUser, IUserCreate, IUserLogin } from 'src/app/interfaces/IUser';
import { Uid } from '../../provaiders/uid/uid';
import { Storage } from '../../provaiders/storage/storage';

@Injectable({
  providedIn: 'root'
})
export class User {
  private currentUser: IUser | null = null;
  constructor(private readonly storageService: Storage, private readonly uidService: Uid) { }

  register(user: IUserCreate): IUser {
    const users = this.storageService.get<IUser[]>('users') || [];
    const isEmailExist = users.find(u => u.email === user.email);
    if (isEmailExist) {
      throw new Error('Email already exists');
    }
    const newUser: IUser = {
      id: this.uidService.get(),
      ...user,
      password: atob(user.password)
    };
    users.push(newUser);
    this.storageService.set('users', JSON.stringify(users));
    return newUser;

  }

  login(user: IUserLogin): IUser {
    const users = this.storageService.get<IUser[]>('users') || [];

    const foundUser = users.find(u => u.email === user.email);

    if (!foundUser) {
      throw new Error('User not found');
    }

    const decodedPassword = btoa(foundUser.password);
    if (decodedPassword !== user.password) {
      throw new Error('Invalid credentials');
    }

    this.storageService.set('currentUser', JSON.stringify(foundUser));
    console.log('Login successful:', foundUser);

    return foundUser;
  }

 

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

 
  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  getCurrentUser(): IUser | null {
    if (!this.currentUser) {
      const saved = localStorage.getItem('currentUser');
      this.currentUser = saved ? JSON.parse(saved) : null;
    }
    return this.currentUser;
  }

}
