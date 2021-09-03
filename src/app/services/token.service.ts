import { Injectable } from '@angular/core';

const TOKEN_KEY = 'Token';

export class Token{
  public token: string;
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public logOut(): void {
    console.log("CLEAR");
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

}
