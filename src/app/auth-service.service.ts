import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { getFirestore } from '@firebase/firestore';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private auth: Auth , private router: Router) { 

  }


// [END auth_signup_password_modular]

async signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(this.auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(userCredential.user);
    console.log(user.uid);
    this.router.navigate(['/login']);

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });
}

async login(email: string, password: string) {
  return signInWithEmailAndPassword(this.auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(userCredential.user);
    console.log(user.uid);
    localStorage.setItem('userId', user.uid || '');
    const userId = localStorage.getItem('userId');
    this.router.navigate(['/user/',user.uid]);

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });
}

}
