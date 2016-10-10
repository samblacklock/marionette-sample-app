const Orchestra = require('orchestra');

const HelloWorld = Orchestra.LayoutView.extend({
  el: '#app-hook',
  template: require('./templates/layout.hbs')
});

const hello = new HelloWorld();

hello.render();