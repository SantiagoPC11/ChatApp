import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyDS_0QcF1TXlkEyw69fSy3Sgplnv6cMvHA",
    authDomain: "loginsuradualspc.firebaseapp.com",
    projectId: "loginsuradualspc",
    storageBucket: "loginsuradualspc.appspot.com",
    messagingSenderId: "858018180745",
    appId: "1:858018180745:web:4d3ba4565cf6aedef06058",
    measurementId: "G-461HNC3M9D"
  };

  const app = initializeApp(firebaseConfig);

  let avatar=document.getElementById("avatar")
  let botonSalir=document.getElementById("botonSalir")

const auth=getAuth()
onAuthStateChanged(auth,(user)=>{
    avatar.classList.remove("invisible")
    avatar.textContent=user.email
})

  botonSalir.addEventListener("click",function(){
    signOut(auth).then(()=>{
        avatar.classList.add("invisible")
        window.location.href=("./views/login.html")
    })
    
  })