




// NATIONAL PARK API CALL

    // API Key from National Park Service API (https://www.nps.gov/subjects/developer/api-documentation.htm)
    var APIKey = "wHs10WlfqBFYqXmTvluWeO53DeEFgVLZfGUvCELS"

    // URL Variable
    var queryURL = "https://developer.nps.gov/api/v1/parks?&api_key=" + APIKey

    $(document).ready(function(){

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // console.log resposne form National Park Service API
            console.log(response);
            console.log(response.data[4].fullName);
            console.log(response.data[4].description);

            // pre-selected parks for dynamically built cards
                // card-1
                var parkName1 = response.data[4].fullName
                var parkContent1 = response.data[4].description
                var stateCode1 = response.data[4].states
                var parkCode1 = response.data[4].parkCode

                // building card - 1
                var cardColumn1 = $("<div>").attr("class", "col s12", "col m6")
                var card1 = $("<div>").attr("class", "card")
                var cardImage1 = $("<img>").attr("src", "https://www.nps.gov/common/uploads/structured_data/3C7F9538-1DD8-B71B-0BA12D1447D43CE4.jpg")
                    cardImage1.attr("class", "park-image")
                    cardImage1.attr("data-state", stateCode1)
                    cardImage1.attr("data-park", parkCode1)
                var cardTitle1 = $("<h4>").attr("class", "park-title")
                var cardContent1 = $("<p>").attr("class", "content")

                    cardTitle1.text(parkName1)
                    cardContent1.text(parkContent1)
                    card1.append(cardImage1)
                    card1.append(cardTitle1)
                    card1.append(cardContent1)
                    cardColumn1.append(card1)
                    $("#card-row").append(cardColumn1)

                // card-2
                var parkName2 = response.data[32].fullName
                var parkContent2 = response.data[32].description
                var stateCode2 = response.data[32].states
                var parkCode2 = response.data[32].parkCode

                // building card - 2
                var cardColumn2 = $("<div>").attr("class", "col s12", "col m6")
                var card2 = $("<div>").attr("class", "card")
                var cardImage2 = $("<img>").attr("src", "https://www.nps.gov/common/uploads/structured_data/3C876C2F-1DD8-B71B-0B0F7AB75DF47C6F.jpg")
                    cardImage2.attr("class", "park-image")  
                    cardImage2.attr("data-state", stateCode2)
                    cardImage2.attr("data-park", parkCode2)
                var cardTitle2 = $("<h4>").attr("class", "park-title")
                var cardContent2 = $("<p>").attr("class", "content")

                    cardTitle2.text(parkName2)
                    cardContent2.text(parkContent2)
                    card2.append(cardImage2)
                    card2.append(cardTitle2)
                    card2.append(cardContent2)
                    cardColumn2.append(card2)
                    $("#card-row").append(cardColumn2)

                //card-3
                var parkName3 = response.data[9].fullName
                var parkContent3 = response.data[9].description
                var stateCode3 = response.data[9].states
                var parkCode3 = response.data[9].parkCode

                // building card - 3
                var cardColumn3 = $("<div>").attr("class", "col s12", "col m6")
                var card3 = $("<div>").attr("class", "card")
                var cardImage3 = $("<img>").attr("src", "https://www.nps.gov/common/uploads/structured_data/3C810049-1DD8-B71B-0B0040641619D4A6.jpg")
                    cardImage3.attr("class", "park-image")    
                    cardImage3.attr("data-state", stateCode3)
                    cardImage3.attr("data-park", parkCode3)
                var cardTitle3 = $("<h4>").attr("class", "park-title")
                var cardContent3 = $("<p>").attr("class", "content")

                    cardTitle3.text(parkName3)
                    cardContent3.text(parkContent3)
                    card3.append(cardImage3)
                    card3.append(cardTitle3)
                    card3.append(cardContent3)
                    cardColumn3.append(card3)
                    $("#card-row").append(cardColumn3)
        })
    })

// // creating search results for national park api
// $("#parks-search").on("click", function(){

//     // on search feature, logging input search value
//     searchNationalPark = $("#search_park").val().trim()
//     console.log(searchNationalPark)

//     search(searchNationalPark);
//     $(".searched-parks").show()
// })

// Search National Park API
function search(searchNationalPark){
    var queryURLSearch = "https://developer.nps.gov/api/v1/parks?q=" + searchNationalPark + "&api_key=" + APIKey + "&fields=images";
    console.log (queryURLSearch);

    $.ajax({
        url: queryURLSearch,
        method: "GET"
    }).then(function(searchResponse) {
        console.log(searchResponse)

        // creating loop to grab information to dynamically build searched park card
        for (var i = 0; i < searchResponse.data.length; i++) {
            var parkCode= searchResponse.data[i].id;
            var stateCode = searchResponse.data[i].states;
            var parkName = searchResponse.data[i].fullName;
            var parkContent = searchResponse.data[i].description;
            var parkDirections = searchResponse.data[i].directionsInfo;
            var images = searchResponse.data[i].images


            // looping through all available images
            for (var j = 1; j < images.length; j++) {
                console.log(images[j].url)
                var cardImage = `<img src=${images[j].url}>`
            }

            // searched park cards
            var cardColumn = $("<div>").attr("class", "col s12", "col m6")
            var card = $("<div>").attr("class", "card")
            var cardImage = $(`<img src=${images[0].url}>`)
                cardImage.attr("class", "park-image")  
                cardImage.attr("data-state", stateCode)
                cardImage.attr("data-park", parkCode)
            var cardTitle = $("<h4>").attr("class", "park-title")
            var cardContent = $("<p>").attr("class", "content")
            var cardDirections = $("<p>").attr("class", "content")

            // heart-grey icon
            // <a target="_blank" href="/icons/set/like--v2">Heart icon</a> by <a target="_blank" href="https://icons8.com">Icons8</a>
            var heartIconGrey = '<img src="./assets/images/icons/heart-grey.png" class="icon" id="heart-grey">'

            // heart-red icon
            // <a target="_blank" href="/icons/set/like--v3">Heart icon</a> by <a target="_blank" href="https://icons8.com">Icons8</a>
            var heartIconRed = '<img src="./assets/images/icons/heart-red.png" class="icon" id="heart-red">'

            // weather icon
            // <a target="_blank" href="/icons/set/windy-weather">Windy Weather icon</a> by <a target="_blank" href="https://icons8.com">Icons8</a>
            var weatherIcon = '<img src="./assets/images/icons/cloudy.png" class="icon" id="weather-icon">'

            cardTitle.text(parkName)
            cardContent.text(parkContent)
            cardDirections.text(parkDirections)

            card.append(cardImage)
            card.append(cardTitle)
            card.append(cardContent)
            card.append(cardDirections)
            card.append(heartIconGrey)
            card.append(heartIconRed)
            card.append(weatherIcon)
            cardColumn.append(card)
            $("#new-park-cards").prepend(cardColumn)

            $("#heart-red").hide()

            $("#heart-grey").on("click", function(){
                $("#heart-red").show()
                $("#heart-grey").hide()

                card.appendTo("#red-heart-parks")
            })

            $("#weather-icon").on("click", function(){
                
            })
        }
    })
}

// toast feature to notify users
M.toast({html: 'National Parks reduce hours and staff from November 30th - April 1st. <br><br> Contatct your local park for Winter Season Operating Hours and Road Closures.', classes: 'rounded'});

// FIREBASE

  // Firebase Configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCi2FqKo_Pwcj7Z_ImIJ4Rlwy89QRwjOL8",
        authDomain: "project1-18df4.firebaseapp.com",
        databaseURL: "https://project1-18df4.firebaseio.com",
        projectId: "project1-18df4",
        storageBucket: "project1-18df4.appspot.com",
        messagingSenderId: "178823515374",
        appId: "1:178823515374:web:91f4ee2ea935188314b7ff"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    var firstName = "";
    var lastName = "";
    var email = "";
    var message = "";

    $("#submit").on("click", function(event){
        event.preventDefault();

        firstName = $("#first_name").val().trim();
        lastName = $("#last_name").val().trim();
        email = $("#email").val().trim();
        message = $("#input").val().trim();

        database.ref().push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,
        });
    });

    database.ref().orderByChild("dateAdded").on("child_added", function(childSnapshot){
        console.log(childSnapshot.val().firstName);
        console.log(childSnapshot.val().lastName);
        console.log(childSnapshot.val().email);
        console.log(childSnapshot.val().message);

        var cardColumn = $("<div>").attr("class", "col s12")
        var card = $("<div>").attr("class", "card")
        var memberInfo = $("<div>").attr("class", "member-info")
        var name = $("<h4>").attr("class", "member-name")
        var emails = $("<p>").attr("id", "member-email")
        var messages = $("<p>").attr("id", "member-message")

        name.text(childSnapshot.val().firstName + " " + childSnapshot.val().lastName)
        emails.text(childSnapshot.val().email)
        messages.text(childSnapshot.val().message)

        memberInfo.append(name)
        memberInfo.append(emails)
        memberInfo.append(messages)
        card.append(memberInfo)
        cardColumn.append(card)
        $(".show-member-info").prepend(cardColumn)
        $("#member-header").hide()
        $("#leave-message").hide()

    }), function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    }

    // on click feature that begins the 'openweathermap' API call below
    $("#weather-search").on("click", function(){
    
        var weatherCityName = $("#input-weather").val().trim()
        console.log(weatherCityName)
        weather(weatherCityName);
    })

// OPENWEATHERMAP API CALL
var weatherAPIKey = "a441b767e75a3e228f7eed9d35168238"

function weather(weatherCityName) {
    var weatherQuery = "https://api.openweathermap.org/data/2.5/weather?q=" + weatherCityName + "&APPID=" + weatherAPIKey;

    $.ajax({
        url: weatherQuery,
        method: "GET"
    }).then(function(weatherResponse){
        console.log(weatherResponse)

        var weatherCityName = weatherResponse.name
        console.log(weatherCityName)

        var currentConditions = weatherResponse.weather[0].description
        console.log(currentConditions)

        // high temp calculations
        var tempHigh = weatherResponse.main.temp_max;
        var calcTempHigh = Math.round(((tempHigh - 273.15) * 9)/5) + 32
        console.log("High Temp: " + calcTempHigh)

        // low temp calculations
        var tempLow = weatherResponse.main.temp_min;
        var calcTempLow = Math.round(((tempLow - 273.15) * 9)/5) + 32
        console.log("Low Temp: " + calcTempLow)

        var humidity = weatherResponse.main.humidity
        console.log("Humidity: " + humidity)
        
        // wind calculations
        var windSpeed = weatherResponse.wind.speed;
        var calcWindSpeed = Math.round(windSpeed * 2.20);
        console.log("Wind Speed: " + calcWindSpeed + "mph")

        // building table inputs
        var input = $("<tr>");
        $("tbody").append(input);
            $(input).append("<td>" + weatherCityName);
            $(input).append("<td>" + currentConditions);
            $(input).append("<td>" + calcTempHigh);
            $(input).append("<td>" + calcTempLow);
            $(input).append("<td>" + humidity);
            $(input).append("<td>" + calcWindSpeed)
        })
    }

