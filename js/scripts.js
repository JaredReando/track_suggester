$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var qMobile =  $("input:radio[name=qMobile]:checked").val();
    var qInstituion =  $("input:radio[name=qInstituion]:checked").val();
    var qStyle =  $("input:radio[name=qStyle]:checked").val();
    var qApplication =  $("input:radio[name=qApplication]:checked").val();
    var questionFive =  $("input:radio[name=questionFive]:checked").val();

  // User feedback. Takes variables set above, which pull values from form elements on index.html after 'submit' is activated.
  // Passes these values into the print fucntions below.
  // Matching classes must be set on index.html in order to return variable value into an awaiting response area.
  // Example: something like '<span class="ansMobile"></span>" must exist on index.html in order for the jQuery fucntion
  // "$(.mobile).text(mobile);" to sucessfully return a text result of the user's input on the index.html page.

    $(".name").text(name);

    if (name === "") {
      alert("Whoa there, stranger! Let's have a name, eh?");
    } else if (qMobile === "1" && qApplication === "2") {
      $("#android").show();
    } else if 


    (qInstituion === "3" && qMobile != "1") {
      $("#dotNet").show();
    } else {
      $("#copOut").show();
    }

  });
});
