import * as app from 'firebase/app'
import 'firebase/auth'

const Firebase = firebaseConfig => {
  app.initializeApp(firebaseConfig)

  const auth = app.auth()

  const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password)

  const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password)

  const doSignOut = () => auth.signOut()

  const doPasswordReset = email => auth.sendPasswordResetEmail(email)

  const doPasswordUpdate = password => auth.currentUser.updatePassword(password)

  return {
    auth,
    doCreateUserWithEmailAndPassword,
    doSignInWithEmailAndPassword,
    doSignOut,
    doPasswordReset,
    doPasswordUpdate,
  }
}

export default Firebase
