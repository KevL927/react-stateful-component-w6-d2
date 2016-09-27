var React = require('react');

var List = require('./list');
//createClass creates stateful and stateless components
module.exports = React.createClass({

    getInitialState: function() {
        //input textbox should be empty
       return {
            inputValue: '',
            //list should be empty
            list: this.props.cards
       }
    },
    
    onAddInputChanged: function (event) {
        console.log('onaddinput called');
        this.setState({
            inputValue: event.target.value
        });
    },
    
    onAddSubmit: function(event){
        event.preventDefault();
        this.state.list.push(this.state.inputValue)
        this.setState({
            list: this.state.list,
            inputValue: ''
        })
        console.log('onaddSubmit called');
    },
    
    render: function(){
      return (
        <List
            inputValue = {this.state.inputValue}
            title = {this.props.title}
            cards = {this.props.cards}
            onAddInputChanged = {this.onAddInputChanged}
            onAddSubmit = {this.onAddSubmit}
        />
      ); 
    }
    
});

