$(document).ready(function() {
  $("#piglatin").submit(function(event) {
    event.preventDefault();

    var pigLatin = function(sentence) {
      return false;
    }





    var sentence = $("input#sentence").val();
    $("#output").text(pigLatin(sentence));
    var result = pigLatin(sentence)
  });
});
