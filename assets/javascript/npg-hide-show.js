
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
