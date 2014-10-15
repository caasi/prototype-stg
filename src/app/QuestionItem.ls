React = require 'react'
Description = require './Description'
Slider = require './Slider'

{ h4, h5, ol, li, audio, div } = React.DOM

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
    div do
      className: 'question-item'
      h4 {}, data.original.title
      h5 {}, '(Original)'
      div do
        className: 'original'
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
        li {}, 'great'
      for i, sample of data.samples
        div do
          key: i
          className: 'sample'
          audio do
            controls: on
            src: sample.uri
          Slider!

module.exports = QuestionItem
