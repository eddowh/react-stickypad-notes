/**
 * Component displaying a single note.
 */


var React = require('react');

// Flux elements
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var Note = React.createClass({

    render: function() {
        return (
            <div className="column">
                <div className="note">
                    <p>
                        {this.props.note.text}
                    </p>
                </div>
            </div>
        );
    }

});

module.exports = Note;
