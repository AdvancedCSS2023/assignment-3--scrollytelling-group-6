gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


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
      end: "+=900%", // changes duration by increasing the end point
      scrub: 1,

    }
  })
  gsap.to('.scene__wave--two', {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".scene__wave--three",
      start: "top 40%",
      end: "+=900%",
      scrub: 1,

    }
  })

gsap.to('.scene__wave--three', {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".scene__wave--three",
      start: "top 40%",
      end: "+=900%",
      scrub: 1,

    }
  })


  // bottle motion path
  let bottleScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".scene__bottle",
      start: "top center",
      end: "+=600px",
      scrub: 0.5,
    }
  }); 
  bottleScroll.to('.scene__bottle', {
    motionPath: {
      path: "M33.834,60.412 C52.803,53.384 59.846,32.141 132.889,30.3 174.1335,29.25995 206.57465,33.52242 231.73044,50.10079 252.31246,63.66491 302.668,120.119 295.078,173.275",
      duration: 5,
      align: "self",
      autoRotate: -35,
    }});
  
  // man to boat 

  gsap.to('.scene__man', {
    xPercent: 300,
    ease: "none",
    scrollTrigger: {
      trigger: ".scene__man",
      start: "top top",
      end: "+=1000px",
      scrub: 0.5,
      markers: true
    }
  })



//reload reset
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}



let mm = gsap.matchMedia();

mm.add("(max-width: 950px)", () => {

  let tl = gsap.timeline();

  tl.to(".scene__man",{
    scale: 0.7,
    x: -250,
    y: 50,  
  })

  tl.to(".scene__bottle", {
    scale: 0.7,
    x: -250,
    y: 45,
  })
})


// intersection observers


const texts = document.querySelectorAll(".intro__text");

const options = {
  root: null,
  threshold: 1,
  rootMargin: "1px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("center-fadeIn");
  });
}, options);  

texts.forEach((text) => {
  observer.observe(text);
});


