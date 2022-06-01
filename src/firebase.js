import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDbRabYz0uTCrEmYxEXFzzjutiFvfCb8D0",
  authDomain: "source-election-voting-s-abb28.firebaseapp.com",
  projectId: "source-election-voting-s-abb28",
  storageBucket: "source-election-voting-s-abb28.appspot.com",
  messagingSenderId: "1089992620407",
  appId: "1:1089992620407:web:4b97f9b089436d2bf5c972",
  measurementId: "G-D9NN3V0CEZ"
})

export const auth = app.auth()
export default app
