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

gsap.to('.scene__wave--one', {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".scene__wave--three",
      start: "top 40%",
      end: "+=700%", // changes duration by increasing the end point
      scrub: 1,
      markers: true,
    }
  })


  gsap.to('.scene__wave--two', {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".scene__wave--three",
      start: "top 40%",
      end: "+=700%",
      scrub: 1,
      markers: true,
    }
  })

gsap.to('.scene__wave--three', {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".scene__wave--three",
      start: "top 40%",
      end: "+=700%",
      scrub: 1,
      markers: true,
    }
  })



//reload reset
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}