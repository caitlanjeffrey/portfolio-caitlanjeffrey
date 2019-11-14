
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
})


// toggle support event listeners
// $(document).ready(function(){
//     $("table").hide()

//     $("#departures").on("click", function(){
//       $("#book-tickets").hide()
//       $(".card").hide()
//       $("table").show()
//       console.log("hi")
//     })

//     $("#buy-tickets").on("click", function(){
//       $("#book-tickets").show()
//       $(".card").show()
//       $("table").hide()
//       console.log("hello")
//     })

//     $(".modal-trigger").on("click", function(){
//       $(".modal").modal();
//     })
//   })
