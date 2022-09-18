// Runs after documents ready state
$(document).ready(function() {

    // Get current date and display
    var today = moment().format('dddd, MMMM Do');
    var html = "<p>" + today + "</p>";
    $(html).appendTo("#currentDay");

    // save botton click listeners
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save data in local Storage
        localStorage.setItem(time, text);
    })

    // Clear background color class
    function clearBackGround(element) {

        $(element).removeClass("present");
        $(element).removeClass("past");
        $(element).removeClass("future");
    }

    // Change background color to show past - peresent - future
    function changeBackground(element, now, time) {

        // time is string so we parse to int
        time = parseInt(time);

        // First clearing the background
        clearBackGround(element);

        // Set new background class 
        if (time > now) {
            $(element).addClass("future");
        } else if (time === now) {
            $(element).addClass("present");
        } else {
            $(element).addClass("past");
        }
    }

    function displayBackground() {
        //get current number of hours.
        var now = moment().hour();

        // Change background colors depending on current time
        $(".time-block").each(function() {
            var blockTime = $(this).attr("id").match(/\d+/)[0];
            changeBackground(this, now, blockTime);
        })
    }

    function loadEventData() {

        // Load all data from local storage and display it
        $("#hour9 .description").val(localStorage.getItem("hour9"));
        $("#hour10 .description").val(localStorage.getItem("hour10"));
        $("#hour11 .description").val(localStorage.getItem("hour11"));
        $("#hour12 .description").val(localStorage.getItem("hour12"));
        $("#hour13 .description").val(localStorage.getItem("hour13"));
        $("#hour14 .description").val(localStorage.getItem("hour14"));
        $("#hour15 .description").val(localStorage.getItem("hour15"));
        $("#hour16 .description").val(localStorage.getItem("hour16"));
        $("#hour17 .description").val(localStorage.getItem("hour17"));
    }

    // Function calls
    loadEventData();
    displayBackground();
});