(function(){
  var React, Description, Slider, ref$, h4, h5, ol, li, audio, div, QuestionItem;
  React = require('react');
  Description = require('./Description');
  Slider = require('./Slider');
  ref$ = React.DOM, h4 = ref$.h4, h5 = ref$.h5, ol = ref$.ol, li = ref$.li, audio = ref$.audio, div = ref$.div;
  QuestionItem = React.createClass({
    displayName: 'Lunadance.QuestionItem',
    getDefaultProps: function(){
      return {
        data: {
          original: {
            title: 'test',
            uri: 'test uri'
          },
          samples: [
            {
              uri: 'sample 0'
            }, {
              uri: 'sample 1'
            }
          ]
        }
      };
    },
    render: function(){
      var data, i, sample;
      data = this.props.data;
      return div({
        className: 'question-item'
      }, h4({}, data.original.title), h5({}, '(Original)'), div({
        className: 'original'
      }, audio({
        controls: true,
        src: data.original.uri
      })), h5({
        className: 'sample-title'
      }, '(Generated Samples)'), ol({
        className: 'markarea'
      }, li({}, 'bad'), li({}, 'poor'), li({}, 'fair'), li({}, 'good'), li({}, 'great')), (function(){
        var ref$, results$ = [];
        for (i in ref$ = data.samples) {
          sample = ref$[i];
          results$.push(div({
            key: i,
            className: 'sample'
          }, audio({
            controls: true,
            src: sample.uri
          }), Slider()));
        }
        return results$;
      }()));
    }
  });
  module.exports = QuestionItem;
}).call(this);
