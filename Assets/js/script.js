// JS Pseudocode

// Testing js link to html
console.log("hello world!");

// current day is displayed at the top of the calendar
// presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//Current day is displayed at the top of the calendar
var currentDate = moment().format("MMMM Do YYYY");
$("#currentDay").html(currentDate);

console.log(currentDate);

$(document).ready(function () {

    // Save Button on "click"  
    $(".saveBtn").on("click", function () {
        
        // Select values of the hour block description
        var userInput = $(this).siblings(".description").val();
        var hourBlock = $(this).parent().attr("id");

        // Save user input in textarea in local storage
        localStorage.setItem(userInput, hourBlock);
    }) 

})