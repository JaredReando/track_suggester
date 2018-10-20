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
    var qStyle =  $("input:radio[name=qStyle]:checked").val();
    var qApplication =  $("input:radio[name=qApplication]:checked").val();
    var qStability =  $("input:radio[name=qStability]:checked").val();

    var qExtra1 =  $("input:radio[name=qExtra1]:checked").val();
    var qExtra2 =  $("input:radio[name=qExtra2]:checked").val();
    var qExtra3 =  $("input:radio[name=qExtra3]:checked").val();
    var qExtra4 =  $("input:radio[name=qExtra4]:checked").val();

  // User feedback. Takes variables set above, which pull values from form elements on index.html after 'submit' is activated.
  // Passes these values into the print fucntions below.
  // Matching classes must be set on index.html in order to return variable value into an awaiting response area.
  // Example: something like '<span class="ansMobile"></span>" must exist on index.html in order for the jQuery fucntion
  // "$(.mobile).text(mobile);" to sucessfully return a text result of the user's input on the index.html page.

    $(".name").text(name);

    if (name === "") {
      alert("Whoa there, stranger! Let's have a name, eh?");
    } else if (qMobile === "ruby") {
      $(resultRuby += 1);
    } else if (qMobile === "net") {
      $(resultNet += 1);
    } else if (qMobile === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 1");
    }

    if (qInstituion === "ruby") {
      $(resultRuby += 1);
    } else if (qInstituion === "net") {
      $(resultNet += 1);
    } else if (qInstituion === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 2");
    }

    if (qStyle === "ruby") {
      $(resultRuby += 1);
    } else if (qStyle === "net") {
      $(resultNet += 1);
    } else if (qStyle === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 3");
    }

    if (qApplication === "ruby") {
      $(resultRuby += 1);
    } else if (qApplication === "net") {
      $(resultNet += 1);
    } else if (qApplication === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 4");
    }

    if (qStability === "ruby") {
      $(resultRuby += 1);
    } else if (qStability === "net") {
      $(resultNet += 1);
    } else if (qStability === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 5");
    }

    if (qExtra1 === "ruby") {
      $(resultRuby += 1);
    } else if (qExtra1 === "net") {
      $(resultNet += 1);
    } else if (qExtra1 === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 6");
    }

    if (qExtra2 === "ruby") {
      $(resultRuby += 1);
    } else if (qExtra2 === "net") {
      $(resultNet += 1);
    } else if (qExtra2 === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 7");
    }

    if (qExtra3 === "ruby") {
      $(resultRuby += 1);
    } else if (qExtra3 === "net") {
      $(resultNet += 1);
    } else if (qExtra3 === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 8");
    }

    if (qExtra4 === "ruby") {
      $(resultRuby += 1);
    } else if (qExtra4 === "net") {
      $(resultNet += 1);
    } else if (qExtra4 === "java") {
      $(resultJava += 1);
    } else {
      alert("Please answer question 9");
    }


console.log(resultRuby);
console.log(resultJava);


    if (resultRuby > resultJava) {
      if (resultRuby > resultNet) {
        $("#ruby").show();
      }
    } else if (resultJava > resultRuby) {
      if (resultJava > resultNet) {
        $("#java").show();
      }
    } else if (resultNet > resultRuby) {
      if (resultNet > resultJava) {
        $("#net").show();
      }
    } else {
      $("#copOut").show();
    }

    //  && qInstituion === "2") {
    //   $("#android").show();
    // } else if (qMobile === "2" && qInstituion === "3") {
    //   $("#dotNet").show();
    // } else if (qMobile === "3" && qInstituion === "1") {
    //   $("#ruby").show();
    // } else if (qStyle === "1" && qApplication === "1") {
    //   $("#ruby").show();
    // } else if (qStyle === "3" && qApplication === "3") {
    //   $("#css").show();
    // } else {
    //   $("#copOut").show();
    // }
    //
    // if (name != "") {
    //   $("#submitHide").hide();
    //   $("#retake").show();
    // }
  });
});
