 
 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDZvvA0EAeJSE2oew_vLsJvtx-GSvLNXlY",
    authDomain: "first-firebase-project-d0a4b.firebaseapp.com",
    databaseURL: "https://first-firebase-project-d0a4b.firebaseio.com",
    projectId: "first-firebase-project-d0a4b",
    storageBucket: "first-firebase-project-d0a4b.appspot.com",
    messagingSenderId: "509220030518",
    appId: "1:509220030518:web:4571ed6d7ea0ddf4a27097",
    measurementId: "G-9MJQVDYL9K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let database = firebase.database()
  let ref = database.ref("first firebase project")

  let data ={ 
      name : document.querySelector("#fname").value,
      lastname : document.querySelector("#lname").value,
      email : document.querySelector("#email").value,
      password : document.querySelector("#password").value
     
    
    }

     function submit() {
        ref.push(data)
     }


  