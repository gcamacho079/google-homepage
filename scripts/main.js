$(document).ready(function() {
  $("#lucky_button").mouseover(function() {
    $("#search_action").replaceWith(luckyButtonOptions[arrayIndex]);
  });
});


var luckyButtonOptions = ["<p>I'm Feeling Puzzled</p>", "<p>I'm Feeling Generous</p>", "<p>I'm Feeling Curious</p>", "<p>I'm Feeling Wonderful</p>", "<p>I'm Feeling Doodley</p>", "<p>I'm Feeling Hungry</p>", "<p>I'm Feeling Trendy</p>", "<p>I'm Feeling Stellar</p>"];
var arrayLength = luckyButtonOptions.length;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var arrayIndex = getRandomInt(0, arrayLength);
