// List of handler objects to handle different queries
// Handler object must contain a match property, which is a regex to match to trigger 
// the handler and a target method that takes the query and returns the url to move to
search_handlers = [
    // r/subreddit
    {
        match: /^r\/.+/,
        target: subreddit => `https://reddit.com/${subreddit}`
    },
    // Url with http(s)
    {
        match: /https?(www\.)?.+\..{2,3}/, 
        target: url => url
    },
    // Url without http(s)
    {
        match: /(www\.)?.+\..{2, 3}/,
        target: url => "http://" + url},
    // Anything else -> Google
    {
        match: /.*/,
        target: query => `https://google.com/search?q=${query}`}
]

function handleSearch(query) {
    search_handlers.forEach(handler => {
        if (handler.match.test(query)) {
            window.location.href = handler.target(query);
            throw BreakException;
        }
    });
}
