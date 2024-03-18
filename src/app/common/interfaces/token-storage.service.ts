import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const TOKEN_USERNAME = 'username';
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string, username: any): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    window.sessionStorage.setItem(TOKEN_USERNAME, username);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public removeToken(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(TOKEN_USERNAME);
  }

  // guard check method
  get isLoggedIn(): boolean {
    let authToken = window.sessionStorage.getItem('auth-token');
    return authToken !== null ? true : false;
  }
}
