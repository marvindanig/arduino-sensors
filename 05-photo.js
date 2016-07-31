var five = require('johnny-five');
var songs = require('j5-songs');
var board = new five.Board()  
board.on('ready', function () {  
	var photo = new five.Sensor({
		pin:'A0',
		freq: 250
	});
	var toggle = new five.Switch(3);

 	var buzzer = new five.Piezo(9);
 	var song = songs.load('tetris-theme');

	toggle.on('open', function(){
		buzzer.play(song);
	});

	toggle.on('close', function(){
		buzzer.stop();
	});
	var onFlag = false;

	//var led = new five.Led(13);
	photo.on('data', function(){
		if(this.value>1000) {
			if(onFlag==false) {
				onFlag = true;
				buzzer.play(song);
			}
			
		}
		else {
			onFlag = false;
			buzzer.stop();
		
		}
	});
	
	

});