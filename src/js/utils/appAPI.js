// Flux elements
var AppActions = require('../actions/AppActions');

// API building blocks
DB_NAME = "stickypad-dev0";
API_KEY = "hziyIQh2XKsTXFmBAS2LL9WnRAiCxCcm";

// URLS
MLAB_BASE_URL = "https://api.mlab.com/api/1";
MLAB_STICKYPAD_COLLECTIONS_URL = (
    MLAB_BASE_URL + "/databases/" + DB_NAME
);
API_ACCESS_URL = (
    MLAB_STICKYPAD_COLLECTIONS_URL + "/collections/notes?" +
    "apiKey=" + API_KEY
);

module.exports = {

    addNote: function(note) {
        console.log(API_ACCESS_URL);
        $.ajax({
            url: API_ACCESS_URL,
            data: JSON.stringify(note),
            type: "POST",
            contentType: "application/json"
        });
    }

}
