// Flux elements
var AppActions = require('../actions/AppActions');

// Constants
var MAX_TIMEOUT = 300000;

// API building blocks
var DB_NAME = "stickypad-dev0";
var API_KEY = "hziyIQh2XKsTXFmBAS2LL9WnRAiCxCcm";

// URLS
var MLAB_BASE_URL = "https://api.mlab.com/api/1";
var MLAB_STICKYPAD_COLLECTIONS_URL = (
    MLAB_BASE_URL + "/databases/" + DB_NAME + "/collections/notes"
);
var API_GET_POST_URL = (
    MLAB_STICKYPAD_COLLECTIONS_URL + "?apiKey=" + API_KEY
);


module.exports = {

    addNote: function(note) {
        console.log(API_GET_POST_URL);
        $.ajax({
            url: API_GET_POST_URL,
            data: JSON.stringify(note),
            type: "POST",
            contentType: "application/json"
        });
    },

    getNotes: function(note) {
        console.log(API_GET_POST_URL);
        $.ajax({
            url: API_GET_POST_URL,
            dataType: JSON.stringify(note),
            cache: false,
            success: function(data) {
                // console.log(data);
                AppActions.receiveNotes(data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err)
            }.bind(this)
        });
    },

    removeNote: function(noteId) {
        $.ajax({
            url: MLAB_STICKYPAD_COLLECTIONS_URL + "/" + noteId + "?apiKey=" + API_KEY,
            type: "DELETE",
            async: true,
            timeout: MAX_TIMEOUT,
            success: function(data) {
                console.log('Note ' + noteId + ' deleted.')
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }.bind(this)
        });
    }

}
