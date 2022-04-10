
window.onload = function(){function1()};
var demo = document.getElementById("visit")
function function1(){
    var i = 0;
    var txt = 'Visit our secret place in metaverse and discover other multiverses you did not know before.';
    var speed = 50;

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("visit").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter()
    var j = 0;
    var w = 'Take a tour with your best friend and visit some of the beautiful places that exist in this world.';
    var a = 50;
  
    function typedown() {
      if (j < w.length) {
        document.getElementById("best").innerHTML += w.charAt(j);
        j++;
        setTimeout(typedown, a);
      }
    }
    typedown()
    //end onload
}

var alleliplse = document.getElementById("allelipse");

alleliplse.addEventListener("mousemove", parallax);

function parallax(e){

  var ley = document.querySelectorAll('.layer');
  ley.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX * speed) / 80;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    layer.style.transform = `translate(${x}px) translate(${y}px)`
  })
}

AOS.init({
  offset: 20, 
  delay: 10, 
  duration: 1000, 
  easing: 'ease', 
});