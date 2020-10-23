var quotes = [
  "It's a-me, Mario!",
  "Thank you so much for playing my game!",
  "Wa-hoo!",
  "Oh yeah!",
  "Mario time!",
  "A-wa-wa-wa-wa-wa!",
  "Let's-a go!",
  "Here we go!",
  "Luigi!",
  "Niiiiiintendo! Wahoo!",
  "Let's-a go, little guys!",
  "Don't forget to thank Mr. Miyamoto!",
  "Mamma mia!"
];

var length = quotes.length;

function init() {
  var rand = Math.round(Math.random() * (length - 1));

  var newQuote = quotes[rand]
  document.getElementById('demo').innerHTML = newQuote;
  var newLink = 'https://twitter.com/intent/tweet?hashtags=supermario,learntocode,nintendo,javascript&text=' + newQuote + ' @FreeCodeCamp https://codepen.io/Jmateus88/full/xVaWvp';
  var a = document.getElementById('tweetButton'); //or grab it by tagname etc
  a.href = newLink;
}
window.addEventListener('load', init);
