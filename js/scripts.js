$(document).ready(function() {
  $("#submitHide").show();
  $("#survey").submit(function(event) {
    event.preventDefault();


    var resultRuby = 0;
    var resultJava = 0;
    var resultNet = 0;

    var name = $("#name").val();
    var qMobile =  $("input:radio[name=qMobile]:checked").val();
    var qInstituion =  $("input:radio[name=qInstituion]:checked").val();
    var qElephant =  $("input:radio[name=qElephant]:checked").val();
    var qApplication =  $("input:radio[name=qApplication]:checked").val();
    var qStability =  $("input:radio[name=qStability]:checked").val();

  // User feedback. Takes variables set above, which pull values from form elements on index.html after 'submit' is activated.
  // Passes these values into the print fucntions below.
  // Matching classes must be set on index.html in order to return variable value into an awaiting response area.
  // Example: something like '<span class="ansMobile"></span>" must exist on index.html in order for the jQuery fucntion
  // "$(.mobile).text(mobile);" to sucessfully return a text result of the user's input on the index.html page.

    $(".name").text(name);

    if (name === "") {
      alert("Whoa there, stranger! Let's have a name, eh?");
      return;
    }
    if (qMobile === "ruby") {
      $(resultRuby += 1);
    } else if (qMobile === "net") {
      $(resultNet += 1);
    } else if (qMobile === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 1");
      return;
    }

    if (qInstituion === "ruby") {
      $(resultRuby += 1);
    } else if (qInstituion === "net") {
      $(resultNet += 1);
    } else if (qInstituion === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 2");
      return;
    }

    if (qElephant === "ruby") {
      $(resultRuby += 1);
    } else if (qElephant === "net") {
      $(resultNet += 1);
    } else if (qElephant === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 3");
      return;
    }

    if (qApplication === "ruby") {
      $(resultRuby += 1);
    } else if (qApplication === "net") {
      $(resultNet += 1);
    } else if (qApplication === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 4");
      return;
    }

    if (qStability === "ruby") {
      $(resultRuby += 1);
    } else if (qStability === "net") {
      $(resultNet += 1);
    } else if (qStability === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 5");
      return;
    }


    if (resultRuby > resultJava && resultRuby > resultNet) {
        $("#ruby").show();
    } else if (resultJava > resultRuby && resultJava > resultRuby) {
        $("#java").show();
    } else if (resultNet > resultRuby && resultNet > resultJava) {
        $("#net").show();
    } else {
      $("#copOut").show();
    }

      $("#submitHide").hide();
      $(".retake").slideToggle();

  });
});
