React        = require 'react'
Description  = require './Description'
QuestionItem = require './QuestionItem'

{ div, h2, form } = React.DOM

Test = React.createClass do
  displayName: 'Lunadance.Test'
  getDefaultProps: ->
    data: []
  render: ->
    data = @props.data
    div do
      className: 'main'
      Description!
      div do
        className: 'questions'
        for i, d of data
          QuestionItem do
            key: i
            data: d

module.exports = Test
