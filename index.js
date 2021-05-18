// $(function () {
//     $("#").click(function () {
//         //1. clone the template to a variable, item
//         //ex. let item = $("...").clone();
//         let item = $(".template").clone();

//         //2. remove the class template from the cloned item
//         item.removeClass("template");

//         //3. replace the example text with what is in the textbox
//         //   clear the textbox when you are done
//         let textbox = $("#textbox").val();
//         item.find(".todo-text").text(textbox);
//         $("#textbox").val(null);

//         //4. add cloned item to the DOM
//         $("#todo-list").append(item);

//         //5. when the checkbox is clicked
//         //   if it is now checked:
//         //      - remove the css class 'incomplete'
//         //      - add the css class 'complete'
//         //   if it is now unchecked:
//         //      - remove the css class 'complete'
//         //      - add the css class 'incomplete' 
//         item.find(".checkbox").click( function(){
//           if(item.find(".checkbox").is(":checked")){
//             item.removeClass("incomplete");
//             item.addClass("complete");
//           }
//           else{
//             item.removeClass("complete");
//             item.addClass("incomplete");
//           }
//         });

//         //6. within the cloned item, find the delete button
//         //   remove the cloned item from the DOM when button is clicked
//         item.find(".delete-button").click(function(){
//           item.remove();
//         });
        
//     });
// });
function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    
    // Display result inside a div element
    if(w <= 1200){
        $(".item").removeClass("col-sm-3");
        $(".item").addClass("spacerthing d-flex justify-content-center");
    } else {
        $(".item").addClass("col-sm-3");
        $(".item").removeClass("")
    }

    // document.getElementById("result").innerHTML = "Width: " + w + ", " + "Height: " + h;
}
    
// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
displayWindowSize();

// Asteroid Field button
$(function () {
    $("#Play1").click(function () {
        $(".games-list").addClass("hidden");
        $("#AsteroidField").removeClass("hidden");
    });
});

// Asteroid Field button
$(function () {
    $("#Play2").click(function () {
        $(".games-list").addClass("hidden");
        $("#Dogecoin").removeClass("hidden");
    });
});

// Back button
$(function () {
    $(".back").click(function () {
        $(".games-list").removeClass("hidden");
        $(".game").addClass("hidden");
    });
});