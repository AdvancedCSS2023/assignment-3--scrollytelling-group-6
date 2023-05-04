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


gsap.to('.wave1', {
    xPercent: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".wave1",
      start: "top center",
      end: "bottom 40%",
      scrub: 1,
      markers: true,
    }
  })


  gsap.to('.wave2', {
    xPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".wave1",
      start: "top center",
      end: "bottom 40%",
      scrub: 1,
      markers: true,
    }
  })

  
gsap.to('.wave3', {
    xPercent: -40,
    ease: "none",
    scrollTrigger: {
      trigger: ".wave1",
      start: "top center",
      end: "bottom 40%",
      scrub: 1,
      markers: true,
    }
  })



//reload reset
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}