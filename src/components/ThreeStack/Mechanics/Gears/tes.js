const ErrorSignals = require('../../errors') ; 
const Rotator = require('./Rotator').Rotator; 

const GearErrors = (()=> {
    return {
        InvalidTeethArity : "Bad teeth number"
    }
})() ;


class Cogs {

  constructor( options ){
    this.size = options.size || 6 ; 
    if(this.size % 2 > 0) throw GearErrors.InvalidTeethArity ; 
    this.cogSize = options.cogSize || 0 ;
  }
}



class Gear extends Rotator {
  constructor( options ){
    super( options ) ; 
    if( options === undefined ) throw ErrorSignals.InvalidConstructionObject ;
    this.cogs= new Cogs(options.cogs || {}) ; 
    this.connect = [];
    this.same = [];
    this.type = 'normal';
  }
} ; 


module.exports = {
    GearErrors, 
    Cogs, 
    Gear
}

/*const cvsize = {
  x: 300,
  y: 500
}

const TWOPI = Math.PI * 2;
const container = document.getElementById("cont");
const canvas = document.createElement( "canvas" );
const ctx = canvas.getContext('2d');
var escind = document.getElementById("escape");
var starttime = Date.now();

var speed = TWOPI/180;
const gears = [];
const face = [];



canvas.id = "cv";
canvas.width = cvsize.x;
canvas.height = cvsize.y;
container.appendChild(canvas);

function Gear( radius, teeth) {

  Rotator.call( radius, teeth ); 
  this.tsize = (this.radius/3 > 10) ? 10 : this.radius/3;
  this.pos = {
    x: 0,
    y: 0
  }
  this.angle = 0;
  this.connect = [];
  this.same = [];
  this.type = 'normal';
  this.colour = 'rgba(78, 54, 19, 1)';
  this.colourfill = 'rgba(220, 159, 69, 1)';
}



Gear.prototype.rotate = function(ang) {
  this.angle += ang;
  while (this.angle > TWOPI) {
    this.angle -= TWOPI;
  }
  while (this.angle < -TWOPI) {
    this.angle += TWOPI;
  }
  if (this.connect.length) {
    for (var i=0; i<this.connect.length; i++) {
      var ratio = this.connect[i].teeth/this.teeth;
      var theta = -ang/ratio;
      this.connect[i].turn(theta);
    }
  }
  if (this.same.length) {
    for (var i=0; i<this.same.length; i++) {
      this.same[i].rotate(ang);
    }
  }
}
Gear.prototype.position = function(x, y) {
  this.pos.x = x;
  this.pos.y = y;
}
Gear.prototype.turn = function (ang) {
  this.angle += ang;
  while (this.angle > TWOPI) {
    this.angle -= TWOPI;
  }
  while (this.angle < -TWOPI) {
    this.angle += TWOPI;
  }
  if (this.connect.length) {
    for (var i=0; i<this.connect.length; i++) {
      var ratio = this.connect[i].teeth/this.teeth;
      var theta = -ang/ratio;
      this.connect[i].turn(theta);
    }
  }
  if (this.same.length) {
    for (var i=0; i<this.same.length; i++) {
      this.same[i].rotate(ang);
    }
  }
}

function Hand(r) {
  this.radius = r;
  this.pos = {
    x: 0,
    y: 0
  }
  this.angle = 0;
  this.type = 'normal';
}
Hand.prototype.rotate = function(ang) {
  this.angle += ang;
  while (this.angle > TWOPI) {
    this.angle -= TWOPI;
  }
}
Hand.prototype.position = function(x, y) {
  this.pos.x = x;
  this.pos.y = y;
}
Hand.prototype.set = function(ang) {
  this.angle = ang;
  while (this.angle > TWOPI) {
    this.angle -= TWOPI;
  }
}



var escapegear = new Gear(60, 60);
escapegear.position(0, 0);
escapegear.colour = '#333';
escapegear.colourfill = '#ccc';
escapegear.type = 'escape';

var escapepinion = new Gear(12, 12);
escapepinion.type = 'pinion';
escapepinion.colour = '#555';
escapegear.same.push(escapepinion);

var secondone = new Gear(20, 20);
secondone.position(-62, -70);
secondone.rotate((TWOPI/80)*3);
escapegear.connect.push(secondone);

var secondtwo = new Gear(60, 60);
secondtwo.position(0, -140);
secondone.connect.push(secondtwo);

var minuteone = new Gear(64, 64);
minuteone.position(72, -53);
escapepinion.connect.push(minuteone);

var minuteonepinion = new Gear(8, 8);
minuteonepinion.position(72,-53);
minuteonepinion.type = 'pinion';
minuteonepinion.rotate(TWOPI/16);
minuteone.same.push(minuteonepinion);

var minutetwo = new Gear(90, 90);
minutetwo.position(0, -140);
minutetwo.rotate(TWOPI/8);
minuteonepinion.connect.push(minutetwo);

var minutetwopinion = new Gear(16, 16);
minutetwopinion.position(0, -140);
minutetwopinion.type = 'pinion';
minutetwo.same.push(minutetwopinion);

var hourone = new Gear(40, 40);
hourone.position(-70, -140);
hourone.rotate(TWOPI/80);
minutetwopinion.connect.push(hourone);

var houronepinion = new Gear(10, 10);
houronepinion.position(-70, -140);
houronepinion.type = 'pinion';
hourone.same.push(houronepinion);

var hourtwo = new Gear(48, 48);
hourtwo.position(0, -140);
houronepinion.connect.push(hourtwo);

gears.push(escapegear);
gears.push(escapepinion);
gears.push(secondone);
gears.push(secondtwo);
gears.push(minuteone);
gears.push(minuteonepinion);
gears.push(minutetwo);
gears.push(minutetwopinion);
gears.push(hourone);
gears.push(houronepinion);
gears.push(hourtwo);

var hourhand = new Hand(70);
hourhand.position(0, -140);
hourhand.type = 'hour';

var minutehand = new Hand(80);
minutehand.position(0, -140);
minutehand.type = 'minute';

var secondhand = new Hand(100);
secondhand.position(0, -140);
secondhand.type = 'second';

face.push(hourhand);
face.push(minutehand);
face.push(secondhand);

hourtwo.same.push(hourhand);
minutetwo.same.push(minutehand);
secondtwo.same.push(secondhand);

function originline() {
  ctx.save();
  ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
  ctx.beginPath();
  ctx.moveTo(-cvsize.x*2, 0);
  ctx.lineTo(cvsize.x*2, 0);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -cvsize.y*2);
  ctx.lineTo(0, cvsize.y*2);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function drawHand(hand) {
  ctx.save();
  ctx.translate(hand.pos.x, hand.pos.y);
  ctx.rotate(hand.angle);
  switch (hand.type) {
    case 'second':
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'red';
      ctx.fillStyle = 'red';
      break;
    case 'minute':
      ctx.lineWidth = 6;
      ctx.strokeStyle = 'black';
      ctx.fillStyle = 'black';
      ctx.lineCap = 'butt';
      ctx.lineJoin = 'bevel';
      break;
    case 'hour':
      ctx.lineWidth = 9;
      ctx.strokeStyle = 'black';
      ctx.fillStyle = 'black';
      ctx.lineCap = 'butt';
      ctx.lineJoin = 'bevel';
      break;
                   }
  ctx.beginPath();
  ctx.moveTo(0, hand.radius/4);
  ctx.lineTo(0, -hand.radius);
  ctx.closePath();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(0, 0, hand.radius/18, 0, TWOPI);
  ctx.closePath();
  ctx.fill();
  
  ctx.restore();
  ctx.setTransform(1, 0, 0, 1, cvsize.x/2, cvsize.y/2);
}

function drawGear(gear) {
  ctx.save();
  ctx.translate(gear.pos.x, gear.pos.y);
  ctx.rotate(gear.angle);
  ctx.strokeStyle = gear.colour;
  ctx.fillStyle = gear.colourfill;
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  switch (gear.type){
    case 'normal':
      ctx.save();
      var w = (TWOPI * gear.radius)/(gear.teeth * 4);
      for (var i=0; i<gear.teeth; i++) {
        ctx.beginPath();
        ctx.moveTo(0, gear.radius + gear.tsize);
        ctx.lineTo(w, gear.radius);
        ctx.lineTo(-w, gear.radius);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.rotate(TWOPI/gear.teeth);
      }
      ctx.restore;
      ctx.beginPath();
      //ctx.arc(0,0, gear.radius, 0,TWOPI);
      var theta = 0;
      for (var i=0; i<4; i++) {
      ctx.arc(0, 0, gear.radius, theta, theta+TWOPI/4-TWOPI/32);
      ctx.arc(0, 0, gear.radius*(0.8), theta+TWOPI/4-TWOPI/32, theta+TWOPI/32, true);
      ctx.arc(0, 0, gear.radius*(0.3), theta+TWOPI/16, theta+TWOPI/4-TWOPI/16);
      ctx.arc(0, 0, gear.radius*(0.8), theta+TWOPI/4-TWOPI/32, theta+TWOPI/4-TWOPI/32);
      ctx.arc(0, 0, gear.radius, theta+TWOPI/4-TWOPI/32, theta+=TWOPI/4);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      ctx.beginPath();
      ctx.arc(0,0, gear.radius/10, 0,TWOPI);
      ctx.closePath();
      ctx.stroke();
      break;
     case 'pinion':
      ctx.save();
      var w = (TWOPI * gear.radius)/(gear.teeth * 4);
      for (var i=0; i<gear.teeth; i++) {
        ctx.beginPath();
        ctx.moveTo(0, gear.radius + gear.tsize*2);
        ctx.lineTo(w, gear.radius);
        ctx.lineTo(-w, gear.radius);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.rotate(TWOPI/gear.teeth);
      }
      ctx.restore;
      ctx.beginPath();
      ctx.arc(0,0, gear.radius, 0,TWOPI);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      ctx.beginPath();
      ctx.arc(0,0, gear.radius/10, 0,TWOPI);
      ctx.closePath();
      ctx.stroke();
      break;
    case 'escape':
      ctx.save();
      for (var i=0; i<gear.teeth; i++) {
        ctx.beginPath();
        ctx.moveTo(0, gear.radius);
        if (gear.radius/5 > 10) {
          ctx.lineTo(0, gear.radius+10);
        } else {
          ctx.lineTo(0, gear.radius+(gear.radius/5));
        }
        ctx.lineTo(-5, gear.radius-5);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.rotate(TWOPI/gear.teeth);
      }
      ctx.restore;
      ctx.beginPath();
      //ctx.arc(0,0, gear.radius, 0,TWOPI);
      var theta = 0;
      for (var i=0; i<8; i++) {
      ctx.arc(0, 0, gear.radius, theta, theta+TWOPI/8-TWOPI/32);
      ctx.arc(0, 0, gear.radius*(0.8), theta+TWOPI/8-TWOPI/32, theta+TWOPI/32, true);
      ctx.arc(0, 0, gear.radius*(0.3), theta+TWOPI/16, theta+TWOPI/8-TWOPI/16);
      ctx.arc(0, 0, gear.radius*(0.8), theta+TWOPI/8-TWOPI/32, theta+TWOPI/8-TWOPI/32);
      ctx.arc(0, 0, gear.radius, theta+TWOPI/8-TWOPI/32, theta+=TWOPI/8);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      ctx.beginPath();
      ctx.arc(0,0, gear.radius/10, 0,TWOPI);
      ctx.closePath();
      ctx.stroke();
      break;
                   }
  
  
  //ctx.fill();
  
  ctx.restore();
  ctx.setTransform(1, 0, 0, 1, cvsize.x/2, cvsize.y/2);
}

function drawArrows(gears) {
  ctx.save();
  ctx.strokeStyle = '#60af60';
  ctx.fillStyle = '#60af60';
  for (var i=0; i<gears.length; i++){
    if (gears[i].connect.length) {
      for (var j=0; j<gears[i].connect.length; j++) {
        ctx.beginPath();
        //ctx.arc(gears[i].pos.x, gears[i].pos.y, 5, 0, TWOPI);
        ctx.moveTo(gears[i].pos.x, gears[i].pos.y);
        ctx.lineTo(gears[i].connect[j].pos.x, gears[i].connect[j].pos.y);
        ctx.closePath();
        ctx.stroke();
        
        ctx.translate(gears[i].connect[j].pos.x, gears[i].connect[j].pos.y)
        ctx.rotate(Math.atan2(gears[i].connect[j].pos.y - gears[i].pos.y, gears[i].connect[j].pos.x - gears[i].pos.x)+TWOPI/4);
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(-5,10);
        ctx.lineTo(5,10);
        ctx.closePath();
        ctx.fill();
        ctx.setTransform(1, 0, 0, 1, cvsize.x/2, cvsize.y/2);
      }
    }
  }
  ctx.restore();
}


function tryTurn(gear, ang) {
  if (escape === 0 && !esctog) {
    turned = 0;
    esctog = 1;
  } else if (escape != 0 && esctog) {
    esctog = 0;
  }
  if (turned <= TWOPI/60) {
    gear.turn(speed);
    turned += speed;
  }
}
var escape = 0;
var esctog = 0;
var turned = 0;
var pendulum = 0;
var mtheta = 0.1;
var curt = 0;
var stval = -1;
var chval = 2;
var dur = 1000;
function easer(t, b, c, d) { // currentTime, startValue, changeInValue, duration
  return -c/2 * (Math.cos(Math.PI * t/d) -1) + b;
}
function pendulumDraw() {
  ctx.save();
  ctx.translate(0, -90);
  ctx.rotate(pendulum * mtheta);
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(0, cvsize.y*(2.5/4));
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, cvsize.y*(2.5/4), 10, 0, TWOPI);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(30, 10);
  ctx.lineTo(25, 22);
  ctx.lineTo(25, 12);
  ctx.lineTo(0, 7);
  ctx.lineTo(-25, 12);
  ctx.lineTo(-22, 22);
  ctx.lineTo(-30, 10);
  ctx.closePath();
  ctx.fill();
  //ctx.stroke();
  ctx.setTransform(1, 0, 0, 1, cvsize.x/2, cvsize.y/2);
  ctx.restore();
}
var pendulumMax = 0;

function setTime() {
  setting = true;
}

var setting = false;
var handtime = 0;
var handtimetest = false;
var handdur = 10;
var secStart, secEnd, minStart, minEnd, hourStart, hourEnd = 0;
function handCorrect() {
  if (setting) {
    if (!handtimetest) {
      handtimetest = true;
      hourtwo.same.pop();
      minutetwo.same.pop();
      secondtwo.same.pop();
      var thetime = new Date();
      var hh = thetime.getHours() > 12 ? thetime.getHours()-12 : thetime.getHours();
      secDiff = (TWOPI/60)*(thetime.getSeconds()) - secondhand.angle;
      minDiff = ((TWOPI/60)*(thetime.getMinutes()) + (TWOPI/3600)*thetime.getSeconds()) - minutehand.angle;
      hourDiff = ((TWOPI/12)*(hh) + (TWOPI/720)*thetime.getMinutes()) - hourhand.angle;
    }
    secondhand.rotate(secDiff/handdur);
    minutehand.rotate(minDiff/handdur);
    hourhand.rotate(hourDiff/handdur);
    handtime++;
    if (handtime >= handdur) {
      var thetime = new Date();
      handtimetest = false;
      setting = false;
      hourtwo.same.push(hourhand);
      minutetwo.same.push(minutehand);
      secondtwo.same.push(secondhand);
      secondhand.angle = (TWOPI/60)*thetime.getSeconds();
      minutehand.angle = (TWOPI/60)*thetime.getMinutes() + (TWOPI/3600)*thetime.getSeconds();
      hourhand.angle = (TWOPI/12)*thetime.getHours() + (TWOPI/720)*thetime.getMinutes();
      console.log("Time set");
    }
  }
}

function draw() {
  ctx.clearRect(-cvsize.x, -cvsize.y, cvsize.x*2, cvsize.y*2);
  
  handCorrect();
  pendulum = easer(curt, stval, chval, dur);
  pendulumDraw();
  curt = Date.now();
  escape = Math.abs((Math.round(pendulum*2))/2);
  
  gears.forEach(drawGear);
  face.forEach(drawHand);
  
  tryTurn(escapegear, speed);
  
  
  //escind.innerHTML = secondone.angle; //pendulumMax;
  
  window.requestAnimationFrame(draw);
}


setTime();
ctx.setTransform(1, 0, 0, 1, cvsize.x/2, cvsize.y/2);
draw();

*/