$(document).ready(function() {


  $("#groceryList").submit(function(event) {
    event.preventDefault();
    var gLists = ["item1", "item2", "item3", "item4", "item5"];

    gLists.forEach(function(Glist) {
      var listItem = $("input#" + Glist).val();
      $(".output ul").append("<li>" + listItem + "</li>");
    });

  });


});
