$ = require 'jquery'
React = require 'react'
Description = require './Description'

{ h4, h5, ol, li, audio, div } = React.DOM
$win = $ window
dim =
  width: $win.width!
  height: $win.height!
console.log dim

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
  getInitialState: ->
    offset:
      left: 0
      top: 0
  componentDidMount: ->
    $e = $ @getDOMNode!
    @setState offset: $e.offset!
    $win.on 'scroll' ~>
      @setState offset: $e.offset!
  render: ->
    data = @props.data
    offset = @state.offset
    div do
      className: 'question-item'
      h4 {}, data.original.title
      h5 {}, '(Original)'
      div {},
        audio do
          controls: on
          src: data.original.uri
      h5 className: 'sample-title', '(Generated Samples)'
      ol do
        className: 'markarea'
        li {}, 'bad'
        li {}, 'poor'
        li {}, 'fair'
        li {}, 'good'
        li {}, 'excellent'
      for i, sample of data.samples
        div do
          key: i
          audio do
            controls: on
            src: sample.uri
          div className: 'slider', 'slider here'

module.exports = QuestionItem
