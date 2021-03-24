  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyABAoGP2yp_C-cWO10k1eSKudVM9xZreV8",
    authDomain: "foodlove-afccd.firebaseapp.com",
    databaseURL: "https://foodlove-afccd-default-rtdb.firebaseio.com",
    projectId: "foodlove-afccd",
    
    storageBucket: "foodlove-afccd.appspot.com",
    messagingSenderId: "240893146826",
    appId: "1:240893146826:web:4f03580bcf60a334ef6633",
    measurementId: "G-W6B4NHHC3Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  const auth = firebase.auth();
  function signup()
  {
      
     // var username=document.getElementById("username");
      var email=document.getElementById("email");
      var password=document.getElementById("password");
     // var password2=document.getElementById("password2");
     // var first_name=document.getElementById("first_name");
      //var last_name=document.getElementById("last_name");

  
  
  
      const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
      
      promise.catch(e => alert(e.message));
      alert("signed up");
  }
  function login(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    

    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
     promise.catch(e => alert(e.message));
     alert("signed in " +  email.value);
    
}

function signout(){
  auth.signOut();
  alert("signed out")
  window.location.href="SignUp.html";
}

auth.onAuthStateChanged(function(user){
  if(user){
    var email = user.email;
    alert("Active User " + email);
  }else{
    alert("no active user");
  }
});

function goo(){
  alert("click confirm to logout");
  window.location.href="../SignUp.html";
}