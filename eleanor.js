const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();


tl.set("#main", {
    y: "100vh",
    scale: 0.6
});


tl.to("#main", {
    y: "30vh",
    duration: 1,
    delay: 1,
    ease: "power2.out"
});


tl.to("#main", {
    y: "0vh",
    duration: 1,
    ease: "power2.inOut"
});


tl.to("#main", {
    scale: 1,
    duration: 1.5,
    ease: "power2.inOut"
});
