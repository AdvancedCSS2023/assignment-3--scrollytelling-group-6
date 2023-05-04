gsap.registerPlugin(ScrollTrigger);


// clouds moving on scroll
let clouds = gsap.timeline();
ScrollTrigger.create({
    animation: clouds,
    trigger: "img",
    start: "top center",
    end: "300%",
    scrub: 1,
    markers: true,
});

clouds.to(".intro__cloud--one", { x: 1200 }, 0,)
clouds.to(".intro__cloud--two", { x: 900 }, 0)
clouds.to(".intro__cloud--three", { x: -700 }, 0)
clouds.to(".intro__cloud--four", { x:900 }, 0)
clouds.to(".intro__cloud--five", { x: -1000 }, 0)



//reload reset
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}