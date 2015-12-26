'use strict';

var argv = require('minimist')(process.argv.slice(2));
var watch = require('../../../utils/watch');

(function(sampling) {
  
  var span = watch((start, stop) => {
    
    var d = new Array(sampling), t = null;
  
    for(let i = 0; i < sampling; ++i) {
      d[i] = new Buffer(4096);
    }
  
    start();
    for(let i = 0; i < sampling; ++i) {
      t = new Uint8Array(d[i]);
    }
    stop();
    
  });
  
  console.log('  -> Uint8Array: span = %sms, avg = %sms', span, span / sampling);
  
})(Number.parseInt(argv['sampling'] || 0));