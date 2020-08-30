import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'

Vue.config.productionTip = false

/*
Rellenar la configuración con los datos de firebase
*/
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  render: h => h(App),
}).$mount('#app')