$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var foodInput = $("input#food").val();
    var musicInput= $("input#music").val();
    var petInput = $("input#pet").val();

    $(".name").text(nameInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".pet").text(petInput);

    $("#submission").show();

    event.preventDefault();
  });
});