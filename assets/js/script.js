var today = dayjs().format('dddd, MMMM D, YYYY h:mm A');
$('#currentDay').text(today);
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  $('.time-block').click(function () {
    const timeElement = $(this).find(".time");
    const timeRange = timeElement.text().split(" - ");
    const startTime = parseTime(timeRange[0]);
    const endTime = parseTime(timeRange[1]);

    const currentTime = today();

 if (today < startTime) {
      $(this).addClass("future");
    } else if (currentTime >= startTime && currentTime <= endTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }

    $(this).click(function () {
      $(this).toggleClass("completed");
    });
  })

  function parseTime(timeString) {
    const parts = timeString;
    return parseInt();
  }

  function today() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return hours * 60 + minutes;
  }
});

var saveButton = document.getElementsByClassName("saveBtn");
var text = document.getElementsByClassName("description");

function toDo() {
  var cText = {
    text,
  }
  
  localStorage.setItem("cText", JSON.stringify(cText));

$(".saveBtn").click(toDo);
};
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

