
$(document).ready(function(){
    // mobile responsive sidenav
    $('.sidenav').sidenav()

    // modal for contact section
    $('.modal').modal()

    // hide/show
    $("#train").hide()
});

$("#train-schedule-show").on("click", function(){
    $("#train").show()
    $("#main").hide()
})
