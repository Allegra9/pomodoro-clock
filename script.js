$(document).ready(function() {
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());

  //formating:
  if (count < 10) {
    $("#num").html("0" + count + ":" + "00");
  } else {
    $("#num").html(count + ":" + "00");
  }

  if (breakTime < 10) {
    $("#breakNum").html("0" + breakTime + ":" + "00");
  } else {
    $("#breakNum").html(breakTime + ":" + "00");
  }
  //end of formating

  //START
  $("#start").click(function() {
    var counter = setInterval(timer, 1000);
    count *= 60; //convert secs to mins
    $("#minusMins, #plusMins").hide();
    $("#start").hide();
    $(".text-under").fadeOut("slow");

    function timer() {
      count -= 1;
      if (count === 0) {
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        breakTime *= 60; //convert secs to mins
        $("#minusBreak, #plusBreak").hide();
        $("#stop").hide();
      }

      //COUNT:
      //secs to mins conversion + correct formating:
      if (Math.floor(count / 60) < 10 && count % 60 >= 10) {
        $("#num").html("0" + Math.floor(count / 60) + ":" + count % 60);
      } else if (Math.floor(count / 60) < 10 && count % 60 < 10) {
        $("#num").html("0" + Math.floor(count / 60) + ":" + "0" + count % 60);
      } else {
        $("#num").html(Math.floor(count / 60) + ":" + count % 60);
      }

      //STOP
      $("#stop").click(function() {
        clearInterval(counter);
      });
      //end of stop function

      function breakTimer() {
        breakTime -= 1;
        if (breakTime === 0) {
          clearInterval(startBreak);
        }

        //BREAKTIME:
        //secs to mins conversion + correct formating:
        if (Math.floor(breakTime / 60) < 10 && breakTime % 60 >= 10) {
          $("#breakNum").html(
            "0" + Math.floor(breakTime / 60) + ":" + breakTime % 60
          );
        } else if (Math.floor(breakTime / 60) < 10 && breakTime % 60 < 10) {
          $("#breakNum").html(
            "0" + Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60
          );
        } else {
          $("#breakNum").html(
            Math.floor(breakTime / 60) + ":" + breakTime % 60
          );
        }
      }
    }
  });

  //RESET

  $("#reset").click(function() {
    count = 25;
    breakTime = 5;
    $("#num").html(count + ":" + "00");
    $("#breakNum").html(breakTime + ":" + "00");
    $("#minusMins, #plusMins").show();
    $("#start").show();
    $("#stop").show();
    $("#minusBreak, #plusBreak").show();
  });

  //PLUS AND MINUS MINUTES:

  $("#minusMins").click(function() {
    if (count > 1) {
      count -= 1;
    }
    if (count < 10) {
      $("#num").html("0" + count + ":" + "00");
    } else {
      $("#num").html(count + ":" + "00");
    }
  });

  $("#plusMins").click(function() {
    if (count < 60) {
      count += 1;
    }
    if (count < 10) {
      $("#num").html("0" + count + ":" + "00");
    } else {
      $("#num").html(count + ":" + "00");
    }
  });

  $("#minusBreak").click(function() {
    if (breakTime > 1) {
      breakTime -= 1;
    }
    if (breakTime < 10) {
      $("#breakNum").html("0" + breakTime + ":" + "00");
    } else {
      $("#breakNum").html(breakTime + ":" + "00");
    }
  });

  $("#plusBreak").click(function() {
    if (breakTime < 60) {
      breakTime += 1;
    }
    if (breakTime < 10) {
      $("#breakNum").html("0" + breakTime + ":" + "00");
    } else {
      $("#breakNum").html(breakTime + ":" + "00");
    }
  });
}); //end doc ready

