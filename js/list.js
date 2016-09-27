var React = require('react');

var Card = require('./card');
//we put this declarative into imperative function language which is JS
module.exports = function (props) {
    
    var cards = props.cards,
        title = props.title,
        inputValue = props.inputValue,
        onAddInputChanged = props.onAddInputChanged,
        onAddSubmit = props.onAddSubmit,
        list = [];

    for(var i = 0; i < cards.length; i++) {
        list.push(<Card text={cards[i]} key={i} />);
    }
    
    return (
        <div className="card-list">
                <h2>{title}</h2>
                {list}
            <form>
                <input type="text" value={inputValue} onChange={onAddInputChanged} /><input type="submit" value="Submit" onClick={onAddSubmit} />
            </form>
        </div>
    );
};