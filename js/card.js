var React = require('react');

module.exports = function (props) {
    var text = props.text;
    
    return (
            <div>
                <p>{text}</p>
            </div>
    );
};