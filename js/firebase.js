
import {
    initializeApp 
} from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js'

import{
    getAuth
}from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js'

import {
    config
} from './config.js'

export function initialize() {
    const firebaseApp = initializeApp(config.firebaseconfig); 
    const firebaseAuth = getAuth(firebaseApp);

    return {
        firebaseApp, 
        firebaseAuth
    }
}