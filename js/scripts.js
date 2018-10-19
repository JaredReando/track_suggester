$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();


    var ansMobile =  $("input:radio[name=mobile]:checked").val();
    var questionOne = $("#questionOne").val();
    var questionTwo = $("#questionTwo").val();
    var questionThree = $("#questionThree").val();
    var questionFour = $("#questionFour").val();
    var questionFive = $("#questionFive").val();

  // User feedback. Takes variables set above, which pull values from form elements on index.html after 'submit' is activated.
  // Passes these values into the print fucntions below.
  // Matching classes must be set on index.html in order to return variable value into an awaiting response area.
  // Example: something like '<span class="ansMobile"></span>" must exist on index.html in order for the jQuery fucntion
  // "$(.mobile).text(mobile);" to sucessfully return a text result of the user's input on the index.html page.

    $(".questionFive").html("<h3>questionFive</h3>");
    $("p#hide").toggleClass();
  });
});
