$(document).ready(function() {
  $("#piglatin").submit(function(event) {
    event.preventDefault();

    var pigLatin = function(sentence) {
      for (word = 0; word <= sentence.length; word += 1) {
        if (sentence[word].charAt(0) === "q" && sentence[word].charAt(1) === "u") {
          $("#output").append(sentence[word].substr(2, sentence[word].length) + sentence[word].charAt(0) + sentence[word].charAt(1) + "ay" + " ")
        } else if (sentence[word].charAt(0) === "a" || sentence[word].charAt(0) === "e" || sentence[word].charAt(0) === "i" || sentence[word].charAt(0) === "o" || sentence[word].charAt(0) === "u") {
              $("#output").append(sentence[word] + "ay" + " ")
        } else if (sentence[word].charAt(0) != "a" || sentence[word].charAt(0) != "e" || sentence[word].charAt(0) != "i" || sentence[word].charAt(0) != "o" || sentence[word].charAt(0) != "u") {
          $("#output").append(sentence[word].substr(1, sentence[word].length) + sentence[word].charAt(0) + "ay" + " ")
        }
        }
      }






    var vowels = ["a", "e", "i", "o", "u"];
    var sentence = $("input#sentence").val().toLowerCase().split(" ");
    $("#output").show();
    $("#output").text(pigLatin(sentence));
    var result = pigLatin(sentence)
    console.log(sentence)
  });
});
