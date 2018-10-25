/*********************************************************************************************
// Teamtreehouse - Full Stack Javascript Techdegree                                           /
// FSJS - Random Quote Generator : Core and Exceeds credits included in code                   /
// Project 1                                                                                  /
// DatPhamQuoc
// Shooting for "Exceed Expectations"
**********************************************************************************************/

/***********************************************************************************************/

// Create the array of quote objects
let quotes = [
  {quote: 'It\'s not the size of the dog in the fight, but the size of the fight in the dog.',
  source: 'Archie Griffen',
  tag: 'Humor'},
  {quote: 'Nothing lasts forever. Not even your troubles.',
  source: 'Arnold H Glasgow',
  tag: 'Self-help'},
  {quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
  source: 'Albert Einstein',
  tag: 'Self-help'},
  {quote: 'Take chances, make mistakes. That\'s how you grow. Pain nourishes your courage. You have to fail in order to practice being brave.',
  source: 'Mary Tyler Moore',
  tag: 'Business'},
  {quote: 'Being strong means rejoicing in who you are, complete with imperfections.',
  source: 'Margaret Woodhouse',
  tag: 'Motivation'},
  {quote: 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ..',
  source: 'C.S. Lewis',
  tag: 'Self-help',
  citation:'The Four Loves'},
  {quote: 'I\'ve missed more than 9,000 shots in my career. I\'ve lost almost 300 games. Twenty-six times I\'ve been trusted to take the game-winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed.',
  source: 'Michael Jordan',
  tag: 'Business'},
  {quote: 'The only place you find success before work is in the dictionary.',
  source: 'May V Smith',
  tag: 'Self-help'},
  {quote: 'You\'re going to fail your way to success, you have nothing to be ashamed of so keep your head up. It’s much easier to come up with excuses of why you can\'t do it. If you do what is easy your life will be hard.',
  source: 'Les Brown',
  tag: 'Motivation'},
  {quote: 'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.',
  source: 'George Bernard Shaw',
  tag: 'Self-help',
  year: '`1942`'},
  {quote: 'Nobody can make you feel inferior without your consent.',
  source: 'Eleanor Roosevelt',
  tag: 'Self-help'},
  {quote: 'It took me a long time not to judge myself through someone else\'s eyes.',
  source: 'Sally Field',
  tag: 'Motivation'},
  {quote: 'I quit being afraid when my first venture failed and the sky didn\'t fall down.',
  source: 'Allen H Neuharth',
  tag: 'Humor'},
  {quote: 'Not since Gutenberg invented the modern printing press more than 500 years ago, making books and scientific tomes affordable and widely available to the masses, has any new invention empowered individuals, and transformed access to information, as profoundly as Google.',
  source: 'Vise, David A',
  tag: 'Education',
  citation: 'The Google Story',
  year: '2005'},
  {quote: 'Without music, life would be a mistake.',
  source: 'Friedrich Nietzsche',
  tag: 'Education',
  citation: 'Twilight of the Idols'},
  {quote: 'People are like stained-glass windows. They sparkle and shine when the sun is out, but when the darkness sets in their true beauty is revealed only if there is light from within.',
  source: 'Elisabeth Kübler-Ross',
  tag: 'Humor'},
  {quote: 'Nothing splendid has ever been achieved except by those who dared believe that something inside of them was superior to circumstance.',
  source: 'Bruce Barton',
  tag: 'Self-help'},
  {quote: 'Aerodynamically the bumblebee shouldn\'t be able to fly, but the bumblebee doesn\'t know that so it goes on flying anyway.',
  source: 'Mary Kay Ash',
  tag: 'Motivation'},
  {quote: 'The secret is in not giving up, of all the greats they didn\'t quit. If you quit I guarantee you\'re gonna fail, but you don\'t know what\'s gunna happen if you don\'t give in.',
  source: 'Archie Griffen',
  tag: 'Humor'},
  {quote: 'Just decide; what\'s it\'s gonna be, who you\'re gonna be and how your gonna do it, and then from that point, the universe will get out of your way.',
  source: 'Will Smith',
  tag: 'Motivation'}
];

let checkNum = [];
let i = 0;

//Create random RGB color string
function rndRGB() {
  var num1 = Math.floor(Math.random() *256);
  var num2 = Math.floor(Math.random() *256);
  var num3 = Math.floor(Math.random() *256);
  return 'rgb(' + num1 +', ' + num2 + ', ' + num3 +')';
}

//Create auto-reset counter to change quote after every 15s
function count () {
  i ++;
  if (i === 15) {
    printQuote();
    i = 0;
  }
}

/*
Next 3 function used to created random numnber that do not repeat itself until all quotes in the array ared displayed once.
When every quote is displayed,the checkNum array becomes empty and it's re-filled to execute next cycle.
*/

//1-Fill the checkNum array with number from 0 to  quotes.length -1
function fillCheckNum() {
  for (let i = 0; i < quotes.length; i +=1) {
    checkNum.push(i);
  }
  return checkNum;
}

//2-Select a random number from checkNum's items
function numFromCheckNum (){
  let index = Math.floor(Math.random()*checkNum.length);
  let randomNum = checkNum[index];
  checkNum.splice(index,1); //remove selected item from checkNum array
  return randomNum;
}

//3-Return number form CheckNum array. Re-create the array if it's empty.
function getNum () {
  if (checkNum.length !== 0) {
    return numFromCheckNum();
  }else {
    fillCheckNum()
    return numFromCheckNum();
  }
}

// Return a random quote object from the quotes array
function getRandomQuuote(array) {
  return array[getNum()];
}

//Print quote to the screen and change color
function printQuote() {
   let color =  rndRGB();
   let object = getRandomQuuote(quotes);
   let string = '';
   if (object.citation !== undefined && object.year !== undefined) {
     string = "<p class=\"quote\">" + " " + object.quote + "</p>" + "\n" +
              "<p class=\"source\">" + object.source + "\n" +
                "<span class=\"citation\">" + object.citation + "</span>" +"\n" +
                "<span class=\"year\">" + object.year + "</span>" +"\n" +
                "<span class=\"tag\">" + object.tag + "</span>" +"\n" +
              "</p>"
    } else if (object.citation === undefined && object.year === undefined) {
      string = "<p class=\"quote\">" + " " + object.quote + "</p>" + "\n" +
               "<p class=\"source\">" + object.source + "\n" +
               "<span class=\"tag\">" + object.tag + "</span>" +"\n" +
               "</p>"
    } else if (object.citation !== undefined && object.year === undefined) {
      string = "<p class=\"quote\">" + " " + object.quote + "</p>" + "\n" +
               "<p class=\"source\">" + object.source + "\n" +
                 "<span class=\"citation\">" + object.citation + "</span>" +"\n" +
                 "<span class=\"tag\">" + object.tag + "</span>" +"\n" +
               "</p>"
    } else if (object.citation === undefined && object.year !== undefined) {
      string = "<p class=\"quote\">" + " " + object.quote + "</p>" + "\n" +
               "<p class=\"source\">" + object.source + "\n" +
                 "<span class=\"year\">" + object.year + "</span>" +"\n" +
                 "<span class=\"tag\">" + object.tag + "</span>" +"\n" +
               "</p>"
    }
  document.getElementById('quote-box').innerHTML = string;
  document.getElementById('loadQuote').style.backgroundColor = color;
  document.getElementsByTagName('body')[0].style.backgroundColor = color;
  i = 0;  // reset counter after the button is clicked
}


printQuote();  //Display first random quote on screen
document.getElementById('loadQuote').addEventListener("click", printQuote, false);  //Respond to "Show another quote" button clicks
setInterval(count, 1000); //start counting
