import{
    signInWithPopup,
    GoogleAuthProvider
}from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js'

import{
    initialize
} from './firebase.js'

import{
    config
} from './config.js'

const loginButton = document.querySelector('#login-btn');

const {
    firebaseAuth
} = initialize(config.firebaseconfig)

loginButton.addEventListener('submit', async (e) => {
    e.preventDefault()

    signInWithPopup(firebaseAuth, new GoogleAuthProvider()).then(res => {
        
        console.log(res.user);

        localStorage.setItem("user", JSON.stringify(res.user));

        location.href = "/home.html";

    }).catch(err => console.log(err))
})