var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

 var c = canvas.getContext("2d");

// function sleep(milliseconds) {
//     var start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//       if ((new Date().getTime() - start) > milliseconds){
//         break;
//       }
//     }
//   }



// console.log(canvas);

// var x = (300);
// var y = (600);


// for ( var i = 0; i < 2; i++) {
//     c.arc(x,y,30,0,Math.PI * 2, false);
// c.strokeStyle = "tan";
// c.stroke();
// x += 100;
// y -= Math.random(0,5);
// c.moveTo(x,y);


     c.arc(300,400,30,0,Math.PI * 2, false);
 c.strokeStyle = "tan";
 c.stroke();
 c.moveTo(400,400);
 c.arc(400,400,30,0,Math.PI * 2, false);
 c.stroke();

c.rect(320,100,60,300);
c.stroke();

c.moveTo(320,100);
c.arc(350,100,30,180,Math.PI * 2, false);
c.stroke();



 function animate() {
requestAnimationFrame(animate);
 }






