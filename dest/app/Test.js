(function(){
  var React, Description, QuestionItem, ref$, div, h2, form, Test;
  React = require('react');
  Description = require('./Description');
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
      var data, i, d;
      data = this.props.data;
      return div({
        className: 'main'
      }, Description(), div({
        className: 'questions'
      }, (function(){
        var ref$, results$ = [];
        for (i in ref$ = data) {
          d = ref$[i];
          results$.push(QuestionItem({
            key: i,
            data: d
          }));
        }
        return results$;
      }())));
    }
  });
  module.exports = Test;
}).call(this);
