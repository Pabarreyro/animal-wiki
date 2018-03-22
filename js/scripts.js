$(document).ready(function() {
  $("#selection").submit(function(event) {
    var animal = $("#animal").val();

    if (animal === "Turtles") {
      $("#turtles").show();
      $("#insects").hide();
      $("#snakes").hide();
      console.log("test");
    } else if (animal === "Insects") {
      $("#insects").show();
      $("#turtles").hide();
      $("#snakes").hide();
    } else if (animal === "Snakes") {
      $("#snakes").show();
      $("#turtles").hide();
      $("#insects").hide();
    } else {
      $(".animal").show();
    }

    event.preventDefault();
  })
})
