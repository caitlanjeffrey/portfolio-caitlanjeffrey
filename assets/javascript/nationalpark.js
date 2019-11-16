$("#national-parks").on("click", function(){
    $("#national-park-main").show()
    $("#main").hide()
    
    

    $(".modal-trigger").on("click", function(){
        $(".modal").modal();
    })
})
