import { auth } from "./firebase";

let Auth = auth.autehenticated= false;
export function signin(email, password) {
  return auth.signInWithEmailAndPassword(email, password).then(auth.autehenticated = true)
    return Auth;    
  
}

export function signup(email, password, name) {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(async user => {
      if (!!user) {
        await auth.currentUser.updateProfile({ displayName: name });
      }
      return user;
    });
}

export function signout() {
  return auth.signOut();
}


