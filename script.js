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

clouds.to(".intro__clouds--one", { x: 1200 }, 0,)
clouds.to(".intro__clouds--two", { x: 900 }, 0)
clouds.to(".intro__clouds--three", { x: 600 }, 0)
clouds.to(".intro__clouds--four", { x: 500 }, 0)
clouds.to(".intro__clouds--five", { x: -900 }, 0)


// waves 

gsap.to('.ocean__waves--one', {
    xPercent: -40,
    ease: "none",
    scrollTrigger: {
      trigger: ".ocean__waves--one",
      start: "top 40%",
      end: "+=3000px", // changes duration by increasing the end point
      scrub: 1,
      markers: true,
    }
  })

  gsap.to('.ocean__waves--two', {
    xPercent: -40,
    ease: "none",
    scrollTrigger: {
      trigger: ".ocean__waves--one",
      start: "top 40%",
      end: "+=3000px",
      scrub: 1,
      markers: true,
    }
  })

gsap.to('.ocean__waves--three', {
    xPercent: -45,
    ease: "none",
    scrollTrigger: {
      trigger: ".ocean__waves--one",
      start: "top 40%",
      end: "+=3000px",
      scrub: 1,
      markers: true,
    }
  })



//reload reset
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}