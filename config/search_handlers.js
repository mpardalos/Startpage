// See instructions in README.md
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
        match: /(www\.)?.+\..{2,3}/,
        target: url => "http://" + url
    },
    {
        match: /.*/,
        target: query => `https://google.com/search?q=${query}`
    }
]
