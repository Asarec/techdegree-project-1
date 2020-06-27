/** Array of objects containing quotes and citation information. */
let quotes = [
    {
        quote: 'We accept the love we think we deserve.',
        source: 'Stephen Chbosky',
        citation: 'The Perks of Being a Wallflower',
        year: 1999,
        tags: ['inspirational', 'love'],
    },
    {
        quote: 'Without music, life would be a mistake.',
        source: 'Friedrich Nietzsche',
        citation: 'Twilight of the Idols.',
        year: 1889,
        tags: ['inspirational', 'music', 'philosophy'],
    },
    {
        quote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
        source: 'Martin Luther King Jr.',
        citation: 'A Testament of Hope: The Essential Writings and Speeches',
        year: 1986,
        tags: ['inspirational', 'light', 'peace'],
    },
    {
        quote: 'Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.',
        source: 'H. Jackson Brown Jr.',
        citation: 'P.S. I Love You',
        year: 2003,
        tags: ['dreams', 'action'],
    },
    {
        quote: 'It is better to be hated for what you are than to be loved for what you are not.',
        source: 'Andre Gide',
        citation: 'Autumn Leaves',
        year: 1950,
        tags: ['life', 'love'],
    },
    {
        quote: 'Be yourself; everyone else is already taken.',
        source: 'Oscar Wilde'
    }
];

/** An array to temporarily store used quotes */
let usedQuotes =[];

/**
 * Returns the object of a random quote.
 * @return {object} - Returns random quote object.
 */
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomObject = quotes[randomIndex];

    // Ensure that quotes don't repeat one after the other.
    if ( quotes.length == 1 ) {
        // Holds on to last quote.
        let holdQuote = quotes.pop();

        // Remove values from usedQuotes array and add to quotes array.
        for (let i = 0; i < usedQuotes.length; i++) {
            quotes.push(usedQuotes[i]);
            usedQuotes.splice(i, 1);
            i--;
        }

        // Add last quote to usedQuotes array.
        usedQuotes.push(holdQuote);
    } else {
        quotes.splice(randomIndex, 1);
        usedQuotes.push(randomObject);
    }

    return randomObject;
}

/**
 * Prints the random quote to the browser.
 * @return {string} - Returns the quote in HTML format.
 */
function printQuote() {
    const randomQuote = getRandomQuote();
    let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;

    // Checks for available citation.
    if ( randomQuote.citation ) {
        html += `<span class="citation">${randomQuote.citation}</span>`;
    }

    // Checks for the year the quote was cited.
    if ( randomQuote.year ) {
        html += `<span class="year">${randomQuote.year}</span></p>`;
    } else {
        html += '</p>';
    }

    // Checks for tags.
    if ( randomQuote.tags ) {
        html += '<ul class="tags">'
        for ( let i = 0; i < randomQuote.tags.length; i++) {
            html += `<li>${randomQuote.tags[i]}</li>`;
        }
        html += '</ul>'
    }

    // Randomly change background color.
    document.body.style.backgroundColor = backgroundColor();

    return document.getElementById('quote-box').innerHTML = html;
}

/**
 * Change Background Color.
 * @returns {string} - Returns RGB values in string format.
 */
function backgroundColor() {
    let rgb = [];

    for (let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * 256));
    }

    return `rgb(${rgb.join(', ')})`;
}

/** Call printQuote for initial quote. */
printQuote();

/** Set repeating interval to 20s */
let quoteTimer = setInterval(printQuote, 20000);

/** Click event listener for the print quote button and reset quoteTimer. */
document.getElementById('load-quote').addEventListener('click', function() {
    printQuote();
    clearInterval(quoteTimer);
    quoteTimer = setInterval(printQuote, 20000);
}, false);
