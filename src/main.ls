React = require 'react'
Test  = require './app/Test'

fake =
  original:
    title: 'babble'
    uri: 'original'
  samples:
    * uri: 'sample/0'
    * uri: 'sample/1'
data = for i from 0 til 100 => fake

React.renderComponent do
  Test data: data
  document.getElementById \container
