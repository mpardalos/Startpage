# Installation

Clone the repo and then point your browser's new tab page to index.html. The method to that
in each browser is different. 

## Chrome
Download the extension [New Tab Redirect](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna?hl=en) 
and in its configuration set file://{path to index.html} as the new tab page url

# Configuration

## Background

images/background.jpg will always be used as the background, so just swap it out to change
it

## Links

config/links.js allows you to create links to any webpage. Simply add another another entry
to the list as well as the related image in the images directory. The entry is in the form
of: 

```
{
    "name": "{Name of the entry}",
    "image": "{Filename of the image to show}",
    "target": "{Target URL}"
}
```

There is already a number of examples present in the list.

## Query handlers

Adding a new query handler is slightly more involved. To add a new one, add a new object to
the search_handlers list in config/search_handlers.js.

The Handler objects contain 2 properties: 

- A match property containing a regex
- A target property containing a function that takes one argument and returns a URL

When the user makes a search, the first handler whose match property matches it has its
target function called with the entire search string as an argument, and the browser is
redirected to the URL returned by it.

