gsap.registerPlugin(ScrollTrigger);


// clouds moving on scroll
let clouds = gsap.timeline();
ScrollTrigger.create({
    animation: clouds,
    trigger: "img",
    start: "top center",
    end: "100%",
    scrub: 1,
});

clouds.to(".cloud-one", { x: 1200 }, 0,)
clouds.to(".cloud-two", { x: 900 }, 0)
clouds.to(".cloud-three", { x: -900 }, 0)
clouds.to(".cloud-four", { x: 600 }, 0)



//reload reset
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}