(function(){
  var React, ref$, table, thead, tr, th, td, audio, div, QuestionItem;
  React = require('react');
  ref$ = React.DOM, table = ref$.table, thead = ref$.thead, tr = ref$.tr, th = ref$.th, td = ref$.td, audio = ref$.audio, div = ref$.div;
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
      return table({}, thead({}, tr({}, th({
        colSpan: 2
      }, data.original.title)), tr({}, td({}, '(Original)')), tr({}, td({}, audio({
        controls: true,
        src: data.original.uri
      }))), tr({
        className: 'blank_row'
      }), tr({}, td({}, '(Generated Samples)'), td({
        className: 'questitem_markarea_'
      }, div({
        className: 'questitem_marks_ch'
      }, 'bad'), div({
        className: 'questitem_marks_ch'
      }, 'poor'), div({
        className: 'questitem_marks_ch'
      }, 'fair'), div({
        className: 'questitem_marks_ch'
      }, 'good'), div({
        className: 'questitem_lastmark_ch'
      }, 'excellent'))), (function(){
        var ref$, results$ = [];
        for (i in ref$ = data.samples) {
          sample = ref$[i];
          results$.push(tr({
            key: i
          }, td({}, audio({
            controls: true,
            src: sample.uri
          }))));
        }
        return results$;
      }())));
    }
  });
  module.exports = QuestionItem;
}).call(this);
