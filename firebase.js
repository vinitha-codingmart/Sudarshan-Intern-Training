var firebaseConfig = {
    apiKey: "AIzaSyDnttFj9376cydBAq-dwSYKNPB7hBAOWTI",
    authDomain: "test-c8a11.firebaseapp.com",
    databaseURL: "https://test-c8a11.firebaseio.com",
    projectId: "test-c8a11",
    storageBucket: "test-c8a11.appspot.com",
    messagingSenderId: "484718958666",
    appId: "1:484718958666:web:113563e64d0cc530dceeb3"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
    console.log("fire1");
var email = document.getElementById("email");
var password = document.getElementById("password");
console.log()

const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
promise.catch(function(error) {
  
});
document.getElementById("id01").style.display = "none";
  }

  function signIn(){
    var email = document.getElementById("email1");
    var password = document.getElementById("password1");
    
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Signed In " + email.value);
      document.getElementById("id02").style.display = "none";
      }