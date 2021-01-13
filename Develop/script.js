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

var displayDate = function() {
  var now = moment().format("dddd, MMMM Do YYYY");
  var date = $(".jumbotron")
  
  var today = $("<p>").addClass("lead");
  today.text(now);

  date.append(today);
}

// task text was clicked
$(".list-group").on("click", "p", function() {
  var text = $(this)
    .text()
    .trim();

  var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});

displayDate();
checkTime();

