var five = require('johnny-five')  
       var board = new five.Board()  
       board.on('ready', function () {  
       

  var servo = new five.Servo({
    id: "MyServo",     // User defined id
    pin: 9,           // Which pin is it attached to?
    type: "standard",  // Default: "standard". Use "continuous" for continuous rotation servos
    range: [0,90],    // Default: 0-180
    fps: 500,          // Used to calculate rate of movement between positions
    invert: false,     // Invert all specified positions
    startAt: 0,       // Immediately move to a degree
    center: false,      // overrides startAt if true and moves the servo to the center of the range
    specs: {           // Is it running at 5V or 3.3V?
      speed: five.Servo.Continuous.speeds["@5.0V"]
    }
  });

var led = new five.Led(13);
         led.blink(200);
       

         servo.sweep();

       
       });