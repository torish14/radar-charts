import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export default (context, inject) => {
  let fireApp
  if (!firebase.apps.length) {
    fireApp = firebase.initializeApp({
      apiKey: 'AIzaSyCRChF7V9_whnNgqAox_Gvlg9BQwUTEol0',
      authDomain: 'strength-finder-app.firebaseapp.com',
      databaseURL: 'https://strength-finder-app.firebaseio.com',
      projectId: 'strength-finder-app',
      storageBucket: 'strength-finder-app.appspot.com',
      messagingSenderId: '132186022366',
      appId: '1:132186022366:web:3317dd9316b9756ed63d4f'
    })
  } else {
    fireApp = firebase.app()
  }

  inject('fireApp', fireApp)
}
