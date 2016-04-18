/**
 * Component displaying a list of notes.
 */


var React = require('react');

// Flux elements
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

// Subcomponents
var Note = require('./Note.jsx');


var NoteList = React.createClass({

    render: function() {
        return (
            <div className="row small-up-2 medium-up-3 large-up-4">
                {
                    this.props.notes.map(function(note, i) {
                        return (
                            <Note note={note} key={i} />
                        )
                    })
                }
            </div>
        );
    }

});

module.exports = NoteList;
