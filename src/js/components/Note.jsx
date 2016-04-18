/**
 * Component displaying a single note.
 */


var React = require('react');

// Flux elements
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var Note = React.createClass({

    removeNote: function(i, j) {
        AppActions.removeNote(i.$oid);
    },

    render: function() {
        return (
            <div className="column">
                <div onDoubleClick={this.removeNote.bind(this, this.props.note._id)} className="note">
                    <p>
                        {this.props.note.text}
                    </p>
                </div>
            </div>
        );
    }

});

module.exports = Note;
