//---- start here

console.log("I'm in!!");

const tl = gsap.timeline();

//tl.from(".logo", {opacity:0});
tl.from(".logo-svg g" , {x:50, opacity:0, stopColor: "#333", ease: "Back.easeOut", stagger:{
  amount:0.5,
  from:"start"
}, delay:1});