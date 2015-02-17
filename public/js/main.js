require.config({
  baseUrl: 'js',
  paths: {
    jquery: 'lib/jquery.min',
    move: 'lib/jquery.event.move',
    swipe: 'lib/jquery.event.swipe',
    fancybox: 'lib/jquery.fancybox'
  },
  shim: {
    move: ['jquery'],
    swipe: ['jquery'],
    fancybox: ['jquery']
  }
});

require([
  'app',
], function(App){
  App.initialize();
});