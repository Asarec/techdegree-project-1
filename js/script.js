// Array of Quotes
const quotes = [
  {
    quote: "We accept the love we think we deserve.",
    source: "Stephen Chbosky",
    citation: "The Perks of Being a Wallflower",
    year: 1999,
    tags: ["inspirational", "love"]
  },
  {
    quote: "Without music, life would be a mistake.",
    source: "Friedrich Nietzsche",
    citation: "Twilight of the Idols.",
    year: 1889,
    tags: ["inspirational", "music", "philosophy"]
  },
  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    source: "Martin Luther King Jr.",
    citation: "A Testament of Hope: The Essential Writings and Speeches",
    year: 1986,
    tags: ["inspirational", "light", "peace"]
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    source: "H. Jackson Brown Jr.",
    citation: "P.S. I Love You",
    year: 2003,
    tags: ["dreams", "action"]
  },
  {
    quote: "It is better to be hated for what you are than to be loved for what you are not.",
    source: "Andre Gide",
    citation: "Autumn Leaves",
    year: 1950,
    tags: ["life", "love"]
  }
];

// Generate random quote based on quotes length
const getRandomQuote = () => Math.floor(Math.random() * quotes.length);

// Printing the random quote
function printQuote(randomIndex) {

  for (let i = 0; i < Object.keys(quotes[randomIndex]).length; i++) {
    if ( Object.keys(quotes[randomIndex])[i] === 'quote' ) {
      document.getElementsByClassName('quote')[0].innerHTML = quotes[randomIndex]['quote'];
    } else if ( Object.keys(quotes[randomIndex])[i] === 'source' ) {
      document.getElementsByClassName('source')[0].prepend(quotes[randomIndex]['source']);
    } else if ( Object.keys(quotes[randomIndex])[i] === 'citation' ) {
      document.getElementsByClassName('citation')[0].innerHTML = quotes[randomIndex]['citation'];
    } else if ( Object.keys(quotes[randomIndex])[i] === 'year' ) {
      document.getElementsByClassName('year')[0].innerHTML = quotes[randomIndex]['year'];
    } else if ( Object.keys(quotes[randomIndex])[i] === 'tags' ) {
      let html = '';
      
      for (let j = 0; j < quotes[randomIndex]['tags'].length; j++) {
        html += `<li>${quotes[randomIndex]['tags'][j]}</li>`
      }

      document.getElementsByClassName('tags')[0].innerHTML = html;
    }
  }
}

// Test output
printQuote(getRandomQuote());