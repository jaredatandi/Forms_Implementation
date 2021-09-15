$(function () {
  $("#blanks form").submit(function () {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    $(".person1").append("bla blah");
    $(".person2").append("bla blah");
    $(".animal").append("bla blah");
    $(".exclamation").append("bla blah");
    $(".verb").append("bla blah");
    $(".noun").append("bla blah");

    $("#story").show();
    event.preventDefault();
  });
});
