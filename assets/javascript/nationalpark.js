$(document).ready(function(){

    // mobile responsive sidenav
    $('.sidenav').sidenav();

    // materialboxed trigger
    $('.materialboxed').materialbox();
    
    // collapsible
    $('.collapsible').collapsible();

    $("#npgeeks-main").hide()

    $("#npgeeks-tab").on("click", function(){
        $("#npgeeks-main").show()
        $("#search-bar").hide()

        $("#main").hide()
        $("#show-planned-trip").hide()
    })

    $("#plan-trip").on("click", function(){
        $("#search-bar").show()
        $("#user-saved-parks").show()
    
        $("#logo").hide()
        $("#parksof-themonth").hide()
    })

    $("#park-news").on("click", function(){
        $("#logo").show()
        $("#parksof-themonth").show()

        $("#search-bar").hide()
        $("#user-saved-parks").hide()
        $("#show-planned-trip").hide()
    })
})

// creating search results for national park api
$("#search-np").on("click", function(){

    // on search feature, logging input search value
    searchNationalPark = $("#input-search").val().trim()
    console.log(searchNationalPark)

    search(searchNationalPark);
    $("#show-planned-trip").show()
})


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