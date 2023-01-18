$(function () {
 
  // Displays current date in header
  var currentDayEl = $('#currentDay');
  var now = dayjs().format('dddd, MMMM D, YYYY');
  currentDayEl.text(now);

  // Conditional formatting to compare current hour to elements hour and apply styling
  var currentHour = dayjs().hour();
  
  $(".time-block").each(function () {
    var hourOfCurrentElement = $(this).attr("id");
    if (hourOfCurrentElement < currentHour) {
      $(this).addClass('past');      
    }
    else if (hourOfCurrentElement > currentHour) {
      $(this).addClass('future');
    }
    else {
      $(this).addClass('present');
    }
  });

  // Event listener for each save button based on hour id. Stores user text to localStorage.
  $('.saveBtn').on("click", function () {
    var eventText = $(this).siblings( '.description').val();
    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, eventText);
  })

  // Set user input from local storage
  for (var i = 8; i < 18; i++) {
    $(`#${i} .description`).val(localStorage.getItem(i));
  }
});
