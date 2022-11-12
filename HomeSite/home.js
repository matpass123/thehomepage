const words = ["Wake up, people...", "The matrix has you.", "Let us tell you why you are here.", "You are here because you know something..","What you know you can not explain, but you feel it", "You have felt it your entire life.","There is something wrong with the world you live in", "You are living in the matrix!","And we are the only people who can help you escape!" , "PRESS ANY KEY TO ESCAPE", "PRESS ANY KEY TO ESCAPE", "PRESS ANY KEY TO ESCAPE", "PRESS ANY KEY TO ESCAPE", "PRESS ANY KEY TO ESCAPE", "PRESS ANY KEY TO ESCAPE", "PRESS ANY KEY TO ESCAPE", "PRESS ANY KEY TO ESCAPE", "PRESS ANY KEY TO ESCAPE", "PRESS ANY KEY TO ESCAPE"]

let cursor = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl = gsap.timeline({repeat: 0})

words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
  tl.to('.text', {duration: 2, text: word})
  masterTl.add(tl)
})
var intervalID = window.setTimeout(pressKey, 46000);

function pressKey() {
 window.addEventListener('keydown', (event) => {
    event.preventDefault();
    window.location.href='index.html'
})
if (window.addEventListener) {
    var once = false;
    window.addEventListener('touchstart', function(){
        if (!once) {
            once = true;
            window.location.href='index.html'
        }
    });
}
}