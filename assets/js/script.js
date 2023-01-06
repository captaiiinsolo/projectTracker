function displayCurrent() {
var currentDate = dayjs().format('MMM D, YYYY [At ] hh:mm:ss A');
$('#1a').text(currentDate);
}

displayCurrent();
setInterval(displayCurrent, 1000);

$( function() {
    $( "#datepicker" ).datepicker();
  } );
  


