import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn: boolean = false;

  login(email: string, password: string): boolean {
    // Validez les identifiants ici (dans un cas réel, cela se ferait sur le backend)
    this.loggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    return this.loggedIn;
  }

  logout(): boolean {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn');
    return true
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
