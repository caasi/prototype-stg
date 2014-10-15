(function(){
  var React, Test, fake, data, res$, i$, i;
  React = require('react');
  Test = require('./app/Test');
  fake = {
    original: {
      title: 'babble',
      uri: 'original'
    },
    samples: [
      {
        uri: 'sample/0'
      }, {
        uri: 'sample/1'
      }
    ]
  };
  res$ = [];
  for (i$ = 0; i$ < 50; ++i$) {
    i = i$;
    res$.push(fake);
  }
  data = res$;
  React.renderComponent(Test({
    data: data
  }), document.getElementById('container'));
}).call(this);
