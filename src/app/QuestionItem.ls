React = require 'react'

{ table, thead, tr, th, td, audio, div } = React.DOM

QuestionItem = React.createClass do
  displayName: 'Lunadance.QuestionItem'
  getDefaultProps: ->
    data:
      original:
        title: 'test'
        uri: 'test uri'
      samples:
        * uri: 'sample 0'
        * uri: 'sample 1'
  render: ->
    data = @props.data
    table {},
      thead {},
        tr {},
          th do
            col-span: 2
            data.original.title
        tr {},
          td {}, '(Original)'
        tr {},
          td {},
            audio do
              controls: on
              src: data.original.uri
        tr className: 'blank_row'
        tr {},
          td {}, '(Generated Samples)'
          td do
            className: 'questitem_markarea_'
            div className: 'questitem_marks_ch', 'bad'
            div className: 'questitem_marks_ch', 'poor'
            div className: 'questitem_marks_ch', 'fair'
            div className: 'questitem_marks_ch', 'good'
            div className: 'questitem_lastmark_ch', 'excellent'
        for i, sample of data.samples
          tr do
            key: i
            td {},
              audio do
                controls: on
                src: sample.uri
            #td {},
            #  QuestionSlider!

module.exports = QuestionItem
