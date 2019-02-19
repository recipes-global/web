export class CustomAuthService {

    private isLoggedIn: boolean = false;
    
    setAuthorization() {
        this.isLoggedIn = true;
    }
}