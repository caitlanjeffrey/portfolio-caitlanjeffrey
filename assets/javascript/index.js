

$(document).ready(function(){
    if ($(window).width() < 600) {
        $('.modal-show').hide()

        $("#resume").on("click", function(){
            $("#container-resume").show()
            $("#container-interests").hide()
            $("#container-contact").hide()
            $(".cards").hide()
        })
        
        $("#contact").on("click", function(){
            $("#container-contact").show()
            $("#container-interests").hide()
            $("#container-resume").hide()
            $(".cards").hide()
        })
        
        // needs fixing
        $("#gallery").on("click", function(){
            $("#container-interests").show()
            $("#container-contact").hide()
            $("#container-resume").hide()
        })
    }

    else {
        $('.modal-show').show()
        $('.non-modal').hide()
    }

    // mobile responsive sidenav
    $('.sidenav').sidenav();

    // modal trigger
    $('.modal').modal()
    
    $("#container-resume").hide()
    $("#container-contact").hide()
});

// $("#resume").on("click", function(){
//     $("#container-resume").show()
//     $("#container-interests").hide()
//     $("#container-contact").hide()
//     $(".cards").hide()
// })

// $("#contact").on("click", function(){
//     $("#container-contact").show()
//     $("#container-interests").hide()
//     $("#container-resume").hide()
//     $(".cards").hide()
// })

// needs fixing
// $("#gallery").on("click", function(){
//     $("#container-interests").show()
//     $("#container-contact").hide()
//     $("#container-resume").hide()
// })


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


