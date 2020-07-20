import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new Subject<User>();
    userData: any;

    constructor(
        private afAuth: AngularFireAuth
    ) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                const _user = new User(
                    user.displayName,
                    user.email,
                    user.photoURL,
                    user.emailVerified,
                    user.uid
                );
                this.user.next(_user);
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            } else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }

    doFacebookLogin() {
        return new Promise<any>((resolve, reject) => {
            let provider = new firebase.auth.FacebookAuthProvider();
            this.afAuth.signInWithRedirect(provider);
            this.afAuth.getRedirectResult()
            .then((res) => {
                resolve(res);
            }), err => {
                console.log(err);
                reject(err);
            }
        });
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null) ? true : false;
    }

    SignOut() {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.user.next();
        })
    }
}