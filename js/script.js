/** Array of objects containing quotes and citation information. */
const quotes = [
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
        quote:
            'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
        source: 'Martin Luther King Jr.',
        citation: 'A Testament of Hope: The Essential Writings and Speeches',
        year: 1986,
        tags: ['inspirational', 'light', 'peace'],
    },
    {
        quote:
            "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        source: 'H. Jackson Brown Jr.',
        citation: 'P.S. I Love You',
        year: 2003,
        tags: ['dreams', 'action'],
    },
    {
        quote:
            'It is better to be hated for what you are than to be loved for what you are not.',
        source: 'Andre Gide',
        citation: 'Autumn Leaves',
        year: 1950,
        tags: ['life', 'love'],
    },
];

/** Returns the object of a random quote. */
const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

/**
 * Accepts a random quote and returns it as a string.
 * @return {string} - Returns the quote in string format.
 */
function printQuote() {
    let randomQuote = getRandomQuote();
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

    return document.getElementById('quote-box').innerHTML = html;
}

/** Call printQuote for default display. */
printQuote();

document.getElementById('load-quote').addEventListener('click', printQuote, false);