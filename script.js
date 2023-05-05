gsap.registerPlugin(ScrollTrigger);


// clouds moving on scroll
let clouds = gsap.timeline();
ScrollTrigger.create({
    animation: clouds,
    trigger: "img",
    start: "top 70%",
    end: "300%",
    scrub: 1,
});

clouds.to(".intro__cloud--one", { x: 1200 }, 0,)
clouds.to(".intro__cloud--two", { x: 900 }, 0)
clouds.to(".intro__cloud--three", { x: -700 }, 0)
clouds.to(".intro__cloud--four", { x:900 }, 0)
clouds.to(".intro__cloud--five", { x: -1000 }, 0)


// waves 

gsap.to('.ocean__waves--one', {
    xPercent: -35,
    ease: "none",
    scrollTrigger: {
      trigger: ".ocean__waves--one",
      start: "top 30%",
      end: "250%",
      scrub: 1,
      markers: true,
    }
  })

  gsap.to('.ocean__waves--two', {
    xPercent: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".ocean__waves--one",
      start: "top 30%",
      end: "250%",
      scrub: 1,
      markers: true,
    }
  })

gsap.to('.ocean__waves--three', {
    xPercent: -35,
    ease: "none",
    scrollTrigger: {
      trigger: ".ocean__waves--one",
      start: "top 30%",
      end: "250%",
      scrub: 1,
      markers: true,
    }
  })



//reload reset
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}