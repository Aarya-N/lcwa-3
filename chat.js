// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDnHyby_V6OVV_y8RoNGKvKI3eAC97dqQo",
    authDomain: "kwitter-8fac6.firebaseapp.com",
    databaseURL: "https://kwitter-8fac6-default-rtdb.firebaseio.com",
    projectId: "kwitter-8fac6",
    storageBucket: "kwitter-8fac6.appspot.com",
    messagingSenderId: "429110672699",
    appId: "1:429110672699:web:dd42bc3b514682cdfe4b1e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



