var createTask = function() {

}

var displayDate = function() {
  var now = moment().format("dddd, MMMM Do YYYY");
  var date = $(".jumbotron")
  
  var today = $("<p>").addClass("lead");
  today.text(now);

  date.append(today);
}
displayDate();

