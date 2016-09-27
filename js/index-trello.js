var React = require('react');
var ReactDOM = require('react-dom');

var Card = function (props) {
    var text = props.text;
    
    return (
            <div>
                <p>{text}</p>
            </div>
    );
};

var List = function (props) {
    var title = props.title,
        cards = props.cards,
        onAddInputChange = props.onAddInputChange,
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
                <input className="card-text-box" type="text" onChange={onAddInputChange} /><input type="submit" value="Submit" onClick={onAddSubmit} />
            </form>
        </div>
    );
};

var Board = React.createClass({
    getInitialState: function() {
        return {
            lists: 
                [
                    {
                        title:'Breakfast List', 
                        cards: ['milk', 'juice', 'egg', 'bread']
                    }, 
                    {
                        title:'Dinner List', 
                        cards: ['steak', 'wine']
                        
                    }
                ]
        };
    },
    
    renderLists: function () {
        console.log(this.state);
    var lists=[];
    
    for(var i=0; i< this.state.lists.length; i++){
         lists.push(<List 
         
                     title={this.state.lists[i].title} 
                     cards={this.state.lists[i].cards}
                     onAddInputChange={this.onAddInputChange}
                     onAddSubmit={this.onAddSubmit}
                     key={i} 
                    />
         )
    }; 
    return lists;
    },
    
    onAddInputChange: function () {
        console.log('onaddinput called');
    },
    
    onAddSubmit: function(event){
       
        event.preventDefault();
        console.log('onaddSubmit called');
     
  
    
    },
    
    render: function() {
        return (
        <div className="card-board">
            <h1>My Shopping List</h1>
            <h4>{this.renderLists()}</h4>
        </div>
    );
}
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />,
                    document.getElementById('app')
    );
});



