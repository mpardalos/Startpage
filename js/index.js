// list of handlers for various types of queries (e.g. r/* for subreddits, or direct urls)
// in the form of [/regex to match/, {function that returns the target url]
search_handlers = [
    // r/subreddit
    [new RegExp("^r\/.+"), subreddit => `https://reddit.com/${subreddit}`],
    // Url with http(s)
    [new RegExp("https?(www\.)?.+\..{2,3}"), url => url],
    // Url without http(s)
    [new RegExp("(www\.)?.+\..{2,3}"), url => "http://" + url],
    ;xa
    // Anything else -> Google
    [new RegExp(".*"), query => `https://google.com/search?q=${query}`]
]

function handleSearch(query) {
    search_handlers.forEach(handler => {
        if (handler[0].test(query)) {
            window.location.href = handler[1](query);
            throw BreakException;
        }
    });
}
