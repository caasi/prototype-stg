(function(){
  var React, QuestionItem, ref$, div, h2, form, Test;
  React = require('react');
  QuestionItem = require('./QuestionItem');
  ref$ = React.DOM, div = ref$.div, h2 = ref$.h2, form = ref$.form;
  Test = React.createClass({
    displayName: 'Lunadance.Test',
    getDefaultProps: function(){
      return {
        data: []
      };
    },
    render: function(){
      var data, d;
      data = this.props.data;
      return div({
        className: 'questions'
      }, (function(){
        var i$, ref$, len$, results$ = [];
        for (i$ = 0, len$ = (ref$ = data).length; i$ < len$; ++i$) {
          d = ref$[i$];
          results$.push(QuestionItem());
        }
        return results$;
      }()));
    }
  });
  module.exports = Test;
}).call(this);
