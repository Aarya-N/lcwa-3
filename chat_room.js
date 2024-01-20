localStorage.getItem("user_name");

  function addRoom()
  {
    localStorage.setItem("addRoomName");
    window.location("kwitter_page.html");
  }
  function getData() {firebase.database().ref("/").on('value',
   function (snapshot) {document.getElementById("output").innerHTML=
    "";snapshot.forEach(function(childSnapshot) {childKey childSnapshot.key; =
    Room names = childKey;
    //Start code
    //End code
    }); }); }
    getData();