import firebase from 'firebase/compat/app'

import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyAStMCfbMaOTpX8y5QyL58vBLRPvIlaLqY',
  authDomain: 'litle-bar.firebaseapp.com',
  databaseURL: 'https://litle-bar-default-rtdb.firebaseio.com',
  projectId: 'litle-bar',
  storageBucket: 'litle-bar.appspot.com',
  messagingSenderId: '986042697086',
  appId: '1:986042697086:web:4b3f2e3b57d20a5e119f2f',
  measurementId: 'G-995H2621R7',
})

export const auth = firebase.auth()
export const firestore = firebase.firestore()
