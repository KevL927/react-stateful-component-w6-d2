var React = require('react');

var ListContainer = require('./listContainer');

module.exports = React.createClass({
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
    var lists=[];
    
    for(var i=0; i< this.state.lists.length; i++){
         lists.push(<ListContainer
                     title = {this.state.lists[i].title} 
                     cards = {this.state.lists[i].cards}
                     key = {i} 
                    />
         )
    }; 
    return lists;
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