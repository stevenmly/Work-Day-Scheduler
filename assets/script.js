// function to check whether current hour is in the past, present, or future
var checkTime = function() {
  $( ".row" ).each(function( index ) {
     var hourText = $(this).find(".hour").text();
     var hour = moment(hourText, "HA");
     var status = moment().diff(hour, "hours");
     
     if (status === 0) {
       $(this).find(".description").addClass("present");
     } else if (status > 0) {
      $(this).find(".description").addClass("past");
     } else if (status < 0) {
      $(this).find(".description").addClass("future");
     }

  });
};

// function to display current date
var displayDate = function() {
  var now = moment().format("dddd, MMMM Do YYYY");
  var date = $(".jumbotron")
  
  var today = $("<p>").addClass("lead");
  today.text(now);

  date.append(today);
}

//saving tasks into localStorage
$(".saveBtn").on("click", function() {

  var message = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  console.log(message, time);

  localStorage.setItem(time, message);
})

// retreive tasks from localStorage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));

displayDate();
checkTime();

