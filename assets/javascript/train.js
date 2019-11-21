
$(document).ready(function(){
    window.addEventListener("resize", windowResize)
    windowResize();

    // mobile responsive sidenav
    $('.sidenav').sidenav()

    // modal for contact section
    $('.modal').modal()

    // hide/show
    $("#train-main").hide()
    $("table").hide()

    $("#departures").on("click", function(){
        $("#book-tickets").hide()
        $(".card").hide()
        $("table").show()
        console.log("hi")
    })

    $("#buy-tickets").on("click", function(){
        $("#book-tickets").show()
        $(".card").show()
        $("table").hide()
        console.log("hello")
    })

    $(".modal-trigger").on("click", function(){
        $(".modal").modal();
    })
});

function windowResize() {
    console.log('hi')
    if ($(document).width() < 1000) {
        $('.modal-show').hide()
        $('.non-modal').show()

    } else {
        $('.modal-show').show()
        $('.non-modal').hide()
        $('#train-ads').hide()
    }
}

$("#train-schedule-show").on("click", function(){
    $("#train-main").show()
    $("#main").hide()
    $("table").hide()
    
    $("#departures").on("click", function(){
        $("#book-tickets").hide()
        $(".card").hide()
        $("#quote").hide()
        $("#train-ads").hide()
        $("table").show()

        console.log("hi")
    })

    $("#buy-tickets").on("click", function(){
        $("#book-tickets").show()
        $(".card").show()
        $("#train-ads").show()
        $("table").hide()
        console.log("hello")
    })

    $(".modal-trigger").on("click", function(){
        $(".modal").modal();
    })
})


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCzvO32Xu-ss0JXSeVfYYPeNwi_eBkB9f4",
    authDomain: "train-homework-ea0e3.firebaseapp.com",
    databaseURL: "https://train-homework-ea0e3.firebaseio.com",
    projectId: "train-homework-ea0e3",
    storageBucket: "train-homework-ea0e3.appspot.com",
    messagingSenderId: "729562840126",
    appId: "1:729562840126:web:f28ac853497cbd90fbe56f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var trainName = "";
var desination = "";
var firstTrain = "";
var frequencyOfTrain = "";

$("#buy-tickets-submit").on("click", function(event){
    event.preventDefault();

    trainName = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    frequencyOfTrain = $("#frequency").val().trim();
    firstTrain = $("#first-train").val().trim();

    database.ref().push({
        trainName: trainName,
        destination: destination,
        frequencyOfTrain: frequencyOfTrain,
        firstTrain: firstTrain,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,
    });
});

database.ref().orderByChild("dateAdded").on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());
    console.log(childSnapshot.val().trainName);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().frequencyOfTrain);
    console.log(childSnapshot.val().firstTrain);

    var timeArr = firstTrain.split(":");
    var trainTime = moment().hours(timeArr[0]).minutes(timeArr[1]);
    var frequencyOfTrain = childSnapshot.val().frequencyOfTrain

    var currentTime = moment();
    console.log("<--- Current Time: " + moment(currentTime).format("HH:mm"));

    var firstTrainConverted = moment(trainTime, "HH:mm").subtract(1, "years");
    console.log("<--- First Time: "+ firstTrainConverted);

    var diffTime = moment().diff(moment(firstTrainConverted), "minutes");
    console.log("<--- Difference in Time: " + diffTime);

    var timeRemaining = diffTime % frequencyOfTrain;
    console.log("<--- Remainder: "+timeRemaining);

    var nextArrival = frequencyOfTrain - timeRemaining;
    console.log("<--- Minutes Till Train: " + nextArrival);

    var input = $("<tr>");
        $("tbody").append(input);
            $(input).append("<td>" + childSnapshot.val().trainName);
            $(input).append("<td>" + childSnapshot.val().destination);
            $(input).append("<td>" + childSnapshot.val().frequencyOfTrain);
            $(input).append("<td>" + childSnapshot.val().firstTrain);
            $(input).append("<td>" + nextArrival);

}), function(errorObject){
    console.log("The read failed: " + errorObject);
}
