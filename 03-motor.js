var five = require('johnny-five')  
       var board = new five.Board()  
       board.on('ready', function () {  
       
         var motor = new five.Motor({pin:10});
         //board.repl.inject({motor:motor});
         motor.on('start', function(){
         	console.log('started');
         	board.wait(2000, function() {
         		motor.stop();
         	});
         });
         motor.on('stop', function(){
         	console.log('stopped');
         });
         motor.start();
       
       });