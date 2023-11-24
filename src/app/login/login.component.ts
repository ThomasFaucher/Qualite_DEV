import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../aurh.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(public authService: AuthService) {}

  onLogin(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
  
      const loginSuccess = this.authService.login(email!, password!);
      
      if (loginSuccess) {
        console.log('Connexion réussie');
        // Ici, gérez la logique post-connexion, comme la redirection
      } else {
        console.error('Erreur de connexion');
        // Ici, gérez les erreurs, comme afficher un message d'erreur
      }
    }
  }

  logout(): void {
    const logoutSucces = this.authService.logout();
    if (logoutSucces) {
      console.log('Déconnexion réussie');
      // Ici, gérez la logique post-déconnexion, comme la redirection
    } else {
      console.error('Erreur de déconnexion');
      // Ici, gérez les erreurs, comme afficher un message d'erreur
    }
    //Actualise la page
    window.location.reload();
    
    
  }
  
  
}
