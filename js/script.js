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