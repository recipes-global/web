export class CustomAuthService {

    private isLoggedIn: boolean = false;
    
    setAuthorization(state: boolean) {
        this.isLoggedIn = state;
    }

    getAuthorization() {
        return this.isLoggedIn;
    }
}