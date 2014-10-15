(function(){
  var React, ref$, h1, h2, h3, div, p, table, tr, td, colgroup, col, a, Description;
  React = require('react');
  ref$ = React.DOM, h1 = ref$.h1, h2 = ref$.h2, h3 = ref$.h3, div = ref$.div, p = ref$.p, table = ref$.table, tr = ref$.tr, td = ref$.td, colgroup = ref$.colgroup, col = ref$.col, a = ref$.a;
  Description = React.createClass({
    displayName: 'Lunadance.Description',
    render: function(){
      return this.transferPropsTo(div({
        className: 'description'
      }, div({
        className: 'content'
      }, h1({}, 'Perceptual Test on Sound Texture Generation'), h2({}, 'Quest ID: 1014763675, Require HTML5 & JavaScript enabled.'), h3({}, 'Description:'), p({}, 'This test asks you to determine whether the generated sound\nsamples perceptually resemble the original one. It is strongly\nrecommended that you use a headphone for the test.'), p({}, 'Please rate the generated samples according to the criteria below:'), table({}, colgroup({}, col({
        className: 'score'
      }), col({
        className: 'desc'
      })), tr({}, td({}, '0-19'), td({}, 'Heavy artefact, very annoying.')), tr({}, td({}, '20-39'), td({}, 'Mederate artefact, annoying.')), tr({}, td({}, '40-59'), td({}, 'Minor artefact, slightly annoying.')), tr({}, td({}, '60-79'), td({}, 'Small artefacts, but not annoying.')), tr({}, td({}, '80-100'), td({}, 'Minimal~No artefacts.'))), a({
        className: 'background-author',
        href: 'https://www.flickr.com/photos/aigle_dore/5238561864/'
      }, '\'Paris\' is taken by Moyan Brenn, CC BY-ND 2.0 some rights reserved.'))));
    }
  });
  module.exports = Description;
}).call(this);
