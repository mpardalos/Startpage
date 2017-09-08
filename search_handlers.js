// List of handler objects to handle different queries
// Handler object must contain a match property, which is a regex to match to trigger 
// the handler and a target method that takes the query and returns the url to move to
search_handlers = [
    {
        match: /^r\/.+/,
        target: subreddit => `https://reddit.com/${subreddit}`
    },
    {
        match: /https?(www\.)?.+\..{2,3}/, 
        target: url => url
    },
    {
        match: /(www\.)?.+\..{2, 3}/,
        target: url => "http://" + url
    },
    {
        match: /.*/,
        target: query => `https://google.com/search?q=${query}`
    }
]
