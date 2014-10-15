React = require 'react'

{ div, input, label } = React.DOM

Slider = React.createClass do
  displayName: 'Lunadance.Slider'
  getInitialState: ->
    value: 50
  render: ->
    @transferPropsTo div do
      className: 'slider'
      input do
        type: 'range'
        name: @props.name or ''
        onChange: ~> @setState value: +it.target.value
      label {}, @state.value

module.exports = Slider
