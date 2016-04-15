/**
 * Form for adding stickypad notes.
 */


var React = require('react');

// Flux elements
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var AddNoteForm = React.createClass({

    onSubmit: function(e) {
        e.preventDefault();

        var note = {
            text: this.refs.text.value.trim()
        }

        // TODO
        AppActions.addNote(note);
    },

    render: function() {
        return (
            <div>
                <h5>
                    <strong>
                        Add A Note
                    </strong>
                </h5>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="large-12 columns">
                            <label>
                                Note Text
                                <input type="text" ref="text" placeholder="Enter text" />
                            </label>
                            <button className="button">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

});

module.exports = AddNoteForm;
