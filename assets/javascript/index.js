

$(document).ready(function(){
    // mobile responsive sidenav
    $('.sidenav').sidenav();

    // modal for contact section
    $('.modal').modal();

});

// FIREBASE CONFIGURATION
    var firebaseConfig = {
        apiKey: "AIzaSyCqabfLTvRyliZsJpbzhZRs0O2srfYcCaU",
        authDomain: "portfolio-caitlanjeffrey.firebaseapp.com",
        databaseURL: "https://portfolio-caitlanjeffrey.firebaseio.com",
        projectId: "portfolio-caitlanjeffrey",
        storageBucket: "portfolio-caitlanjeffrey.appspot.com",
        messagingSenderId: "562753246869",
        appId: "1:562753246869:web:44de131082dca27583ed9c"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    var firstName = "";
    var lastName = "";
    var telephone
    var email = "";
    var message = "";

    $("#submit").on("click", function(event){
        event.preventDefault();
    
        firstName = $("#first_name").val().trim();
        lastName = $("#last_name").val().trim();
        telephone = $("#telephone").val().trim();
        email = $("#email").val().trim();
        message = $("#message").val().trim();
    
        database.ref().push({
            firstName: firstName,
            lastName: lastName,
            telephone: telephone,
            email: email,
            message: message,
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
        });
    });

    database.ref().orderByChild("dateAdded").on("child_added", function(childSnapshot){
        console.log(childSnapshot.val().firstName + childSnapshot.val().lastName);
        console.log(childSnapshot.val().telephone);
        console.log(childSnapshot.val().email);
        console.log(childSnapshot.val().message);
    }), function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    }


