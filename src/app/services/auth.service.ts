import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSource = new BehaviorSubject<boolean>(false);
  isLoggedIn:boolean = false;
  email:string = ""
  userId: string | null = null;
  isLoggedIn$ = this.isLoggedInSource.asObservable();

  constructor(private fireauth: AngularFireAuth, private router: Router) {
    this.checkLoginStatusFromStorage();
  }
  
  loggedIn(){
    if(this.userId){
      return true;
    }
    return false;
  }
  checkLoginStatusFromStorage() {
    const token = localStorage.getItem('token');
    if (token) {
      this.updateLoginStatus(true);
    } else {
      this.updateLoginStatus(false);
    }
  }
  
  

  updateLoginStatus(status: boolean) {
    this.isLoggedIn = status;
    this.isLoggedInSource.next(status);
  }
  
  // login method
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
      localStorage.setItem('token','true');

      // Set the userId and isLoggedIn properties
      this.userId = res.user?.uid ?? null;

      this.isLoggedIn = true;
    
      // Navigate to the home page
      this.router.navigate(['/home']);

    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
    this.email = email;

    this.updateLoginStatus(true);
    
  }

  
  // register method
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      this.sendEmailForVarification(res.user);
      this.router.navigate(['/login/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // sign out
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');

      this.router.navigate(['/home']);
      this.isLoggedIn=false;
    }, err => {
      alert(err.message);
    })
    this.userId = null;
    
  }

  // forgot password
  forgotPassword(email : string) {
      this.fireauth.sendPasswordResetEmail(email).then(() => {
        this.router.navigate(['/home']);
      }, err => {
        alert('Something went wrong');
      })
  }

  // email varification
  sendEmailForVarification(user : any) {
    console.log(user);
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/home']);
    }, (err : any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }


  getUserId() {
    return this.userId;
  }
  
}
