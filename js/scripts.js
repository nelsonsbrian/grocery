$(document).ready(function() {


  $("#groceryList").submit(function(event) {
    event.preventDefault();

    var gLists = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var inputList = [];
    gLists.forEach(function(gList) {
      var itemList = $("input#" + gList).val();

      inputList.push(itemList);
    })
    // var item2 = $("input#item2").val();
    // var item3 = $("input#item3").val();
    // var item4 = $("input#item4").val();
    // var item5 = $("input#item5").val();

    var preSort = [];
    // gLists = gLists.sort();

    preSort = inputList.sort();


    var upperCase = [];

    preSort.forEach(function(word) {
    var upperWord = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    upperCase.push(upperWord);

  })


    upperCase.forEach(function(glist) {
      $(".output ul").append("<li>" + glist + "</li>");
    });

  });


});
