// Search bar queries, using the handlers specified in search_handlers.js
function handleSearch(query) {
    search_handlers.forEach(handler => {
        if (handler.match.test(query)) {
            window.location.href = handler.target(query);
            throw BreakException;
        }
    });
}

// Render the links as specified in links.js
window.onload = () => {
    let link_template_source = document.getElementById('image-link-template').innerHTML;   
    let link_template = Handlebars.compile(link_template_source);
    let link_parent = document.getElementById('external-links');           

    // links declated in links.js, which is loaded from index.html
    links.forEach(link => {
        let link_html = link_template(link);
        link_parent.insertAdjacentHTML('beforeend', link_html);
    });
};
