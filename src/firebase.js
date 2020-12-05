import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyDda8AQ6g4vQMpLQOhWYfmzspLzuTLx44Q",
    authDomain: "my-scuff.firebaseapp.com",
    projectId: "my-scuff",
    storageBucket: "my-scuff.appspot.com",
    messagingSenderId: "525068989893",
    appId: "1:525068989893:web:48eb0ec452b8605320c7ac"
})
const auth = firebase.auth()
const firestore = firebase.firestore()


export { firebase, auth, firestore }