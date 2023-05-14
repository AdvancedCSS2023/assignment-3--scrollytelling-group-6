gsap.registerPlugin(ScrollTrigger);

// waves 

gsap.to('.section1__wave--one', {
  xPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".section1__wave--three",
    start: "top 40%",
    end: "+=300%", // changes duration by increasing the end point
    scrub: 1,
    markers: true,
  }
})
gsap.to('.section1__wave--two', {
  xPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".section1__wave--three",
    start: "top 40%",
    end: "+=300%",
    scrub: 1,
    markers: true,
  }
})
gsap.to('.section1__wave--three', {
  xPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".section1__wave--three",
    start: "top 40%",
    end: "+=300%",
    scrub: 1,
    markers: true,
  }
})
gsap.to('.section1__wave--four', {
  xPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".section1__wave--three",
    start: "top 40%",
    end: "+=300%",
    scrub: 1,
    markers: true,
  }
})
gsap.to('.man', {
  x: "50vw",
  ease: "none",
  scrollTrigger: {
    trigger: ".section1__wave--three",
    start: "top 40%",
    end: "+=100%",
    scrub: 1,
    markers: true,
  }
})
gsap.to('.section1__beach', {
  x: "-50vw",
  ease: "none",
  scrollTrigger: {
    trigger: ".section1__wave--three",
    start: "top",
    end: "+=100%",
    scrub: 1,
    markers: true,
  }
})
gsap.to('.beach2', {
  x: "-80vw",
  ease: "none",
  scrollTrigger: {
    trigger: ".section2",
    start: "bottom",
    end: "+=200%",
    scrub: 1,
    markers: true,
  }
})


//reload reset
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}