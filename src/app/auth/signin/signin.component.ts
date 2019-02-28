import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';
import { CustomAuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private customAuthService: CustomAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
       () => {
        this.customAuthService.setAuthorization(true);
        this.router.navigate(['/recipes']);
        }
    );
  }

  signOut(): void {
    this.authService.signOut().then(
      () => {
        this.customAuthService.setAuthorization(false);
        this.router.navigate(['/recipes']);
      }
    );
  }

}
