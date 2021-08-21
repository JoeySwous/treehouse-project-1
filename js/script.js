/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Variables
const screenTime = 13000;
let displayInterval;



// Quotes array
let quotes = [
  {
    quote:'The medicine for my suffering I had within me from the very beginning but I did not take it. My ailment came from within myself, but I did not observe it until this moment. Now I see I will never find the light unless, like a candle, I am my own fuel.',
    source:'Bruce Lee',
    tags:'Wise'
  },
  {
    quote:'Chemistry is a class you take in high school or college, where you figure out two plus two is 10, or something.',
    source:'Dennis Rodman',
    tags:'Humor'
  },
  {
    quote:'If you believe in yourself, with a tiny pinch of magic all your dreams can come true!',
    source:'Spongebob Squarepants',
    citation: 'Spongebob Squarepants S1 E10 F.U.N.',
    year:'1999',
  },
  {
    quote:'The only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle. As with all matters of the heart, you\'ll know when you find it.',
    source:'Steve Jobs',
    citation:'Stanford Commencement Address',
    year: '2005'
  },
  {
    quote:'I am the greatest, I said that before I even knew I was.',
    source:'Muhammad Ali'
  }
];



// GET RANDOM QUOTE FUNCTION
//Function that takes a random number between 0 and the length of the array and returns an object from it
let getRandomQuote = () => {
  let randomNumber =  Math.floor( Math.random() *  quotes.length );
  return quotes[randomNumber];
};//END OF FUNCTION



//BACKGROUND COLOR FUNCTION
//Chooses a random color for the background.
let randomBackground = () => {

    let randomRGBValue = () => {

        let number = () => {
            return Math.floor(Math.random() * 256);
        }

        return `rgb(${number()}, ${number()}, ${number()})`;
    }
    // Sets chosen color to the background
    document.body.style.backgroundColor = randomRGBValue();
};//END OF FUNCTION



// PRINT QUOTE FUNCTION
// Function that creates and returns a string created by the arrays properties.
let printQuote = () => {
  let randomQuote = getRandomQuote();
  let html = '';
  html += `<p class = "quote"> ${randomQuote.quote} </p>`;
  html += `<p class = "source"> ${randomQuote.source}`;

    //If the random quote object has a citation property, it is added to the string.
    if (randomQuote.citation) {
      html += `<span class = "citation"> ${randomQuote.citation} </span>`
    };

    //If the random quote object has a year property, it is added to the string.
    if(randomQuote.year) {
      html += `<span class = "year"> ${randomQuote.year} </span>`;
    };

    //If the random quote object has a tags property, it is added to the string.
    if (randomQuote.tags) {
      html += `<span class = "tags"> ${randomQuote.tags} </span>`;
    };

//Adds the ending paragraph tag after adding the string up.
 html += '</p>';
 //Replaces the markup in the 'quote-box' div with the html string holding the quote.
 document.getElementById('quote-box').innerHTML = html;
 randomBackground();
 return html;
};//END OF FUNCTION



//Function for changing the quote after the set amount of time.
let displayTimer = (screenTime) => {
    displayInterval = setInterval(() => printQuote(), screenTime);
};



//Selects the 'quote-box' div and updates its HTML content with the random quote markup.
document.getElementById('quote-box').innerHTML = printQuote();
displayTimer(screenTime);



//Calls the printQuote function each time the user clicks the show another quote button, which is targeted by the 'load-quote' class.
document.getElementById('load-quote').addEventListener("click",() => {
    printQuote();
    //Resets the screen time of the next quote back to normal once you click show another quote.
    clearInterval(displayInterval);
    displayTimer(screenTime);
}, false);
