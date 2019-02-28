import { Component, OnInit } from '@angular/core';
import { CustomAuthService } from 'src/app/auth/auth.service';
import { AuthService } from "angularx-social-login";
import { Router } from '@angular/router';
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed=true;
  private user: SocialUser;

  constructor(private customAuthService: CustomAuthService,
              private authService: AuthService,
              private router: Router) { 
                
                this.authService.authState.subscribe((user) => {
                this.user = user;
                
                });
              }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.customAuthService.getAuthorization()
  }

  signOut() {
    this.authService.signOut().then(
      () => {
        this.customAuthService.setAuthorization(false);
        this.router.navigate(['/']);
      }
    );
  }

}
