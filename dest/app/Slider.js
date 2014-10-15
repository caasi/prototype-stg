(function(){
  var React, ref$, div, input, label, Slider;
  React = require('react');
  ref$ = React.DOM, div = ref$.div, input = ref$.input, label = ref$.label;
  Slider = React.createClass({
    displayName: 'Lunadance.Slider',
    getInitialState: function(){
      return {
        value: 50
      };
    },
    render: function(){
      var this$ = this;
      return this.transferPropsTo(div({
        className: 'slider'
      }, input({
        type: 'range',
        name: this.props.name || '',
        onChange: function(it){
          return this$.setState({
            value: +it.target.value
          });
        }
      }), label({}, this.state.value)));
    }
  });
  module.exports = Slider;
}).call(this);
