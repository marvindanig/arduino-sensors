var five = require('johnny-five') ;
var songs = require('j5-songs');
var board = new five.Board()  
board.on('ready', function () {  
	var toggle = new five.Switch(3);

 	var buzzer = new five.Piezo(9);
 	var song = songs.load('tetris-theme');

	toggle.on('open', function(){
		buzzer.play(song);
	});

	toggle.on('close', function(){
		buzzer.stop();
	});

});