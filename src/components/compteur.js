var React = require('react');

var Id;
module.export = MonComposant = React.createClass({
    incrementCount: function(){
        if( this.state.counterIsRunning ){
            this.setState({
                counter: this.state.counter + 1,
            });
        }
    },
    getInitialState: function() {
        return {
            counter: 0,
            counterIsRunning: false,
            btnValue: 'Launch Counter',
        };
    },
    start: function(){
        this.setState({
            btnValue: 'Pause Counter',
            counterIsRunning: true,
        });
        Id = window.setInterval(function(){
            this.incrementCount();
        }.bind( this ), 1000);
    },
    stop: function(){
        this.setState({
            btnValue: 'Launch Counter',
            counterIsRunning: false,
        });
        clearInterval( Id );
    },
    playCounter: function(){
        if( !this.state.counterIsRunning ){
            this.start();
        } else {
            this.stop();
        }
    },
    render: function(){
        var backgroundStyle = {
            height: '200px',
            width: '200px',
            backgroundColor: 'tomato',
            textAlign: 'center',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'black'
        };
        var alignCenter = {
            lineHeight: '40px'
        };
        var styleButton = {
            borderStyle: 'solid',
            borderColor: 'gray',
            borderWidth: '1px',
            backgroundColor: 'floralwhite'
        };
        return( 
        <div style={backgroundStyle}>
            <div style={alignCenter}> <h3 style={ {color: 'floralwhite' } }> Time passed : { this.state.counter } Secondes </h3> </div>
            <div> <input type='button' style={styleButton} onClick={ this.playCounter } value={ this.state.btnValue } ></input> </div>
        </div>
        );
    }
});