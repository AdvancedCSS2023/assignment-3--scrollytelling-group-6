gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// sticky container for the scenes frame
ScrollTrigger.create({
  trigger: '.scene',
  start: 'top top', 
  endTrigger: '#end-trigger', 
  pin: true,
  pinSpacing: false,
});


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
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".side__sidebox--3",
      start: "top 40%",
      endTrigger: "#end-trigger", 
      scrub: 1,
      markers: true,

    }
  })
  gsap.to('.scene__wave--two', {
    xPercent: -50,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".side__sidebox--3",
      start: "top 40%",
      endTrigger: "#end-trigger", 
      scrub: 1,
    }
  })

gsap.to('.scene__wave--three', {
    xPercent: -50,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".side__sidebox--3",
      start: "top 40%",
      endTrigger: "#end-trigger", 
      scrub: 1,

    }
  })


  // bottle to ocean motion path
  let bottleScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".side__sidebox--1",
      start: "center",
      end: "+=500px",
      scrub: 0.5,
      markers: true,
    }
  }); 
  bottleScroll.to('.scene__bottle', {
    motionPath: {
      path: "M33.834,60.412 C52.803,53.384 59.846,32.141 132.889,30.3 174.1335,29.25995 206.57465,33.52242 231.73044,50.10079 252.31246,63.66491 302.668,120.119 295.078,173.275",
      duration: 5,
      align: "self",
      autoRotate: -35,
    }});

    gsap.to('.scene__bottle', {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".side__sidebox--2",
        start: "top center",
        end: "+=600px",
        scrub: 0.5,
      }
    })
  
  // man to boat 
  gsap.to('.scene__man', {
    xPercent: 380,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--3",
      start: "top top",
      end: "+=500px",
      scrub: 0.5,
    }
  })


  //move island out of frame
  gsap.to('.scene__island', {
    xPercent: -300,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--4",
      start: "top top",
      end: "+=500px",
      scrub: 1,
    }
  })

  //move man and boat to center 

  gsap.to('.scene__man', {
    x: -450,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--5",
      start: "top top",
      end: "+=400px",
      scrub: 0.5,
    }
  })
  gsap.to('.scene__boat', {
    x: -450,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--5",
      start: "top top",
      end: "+=400px",
      scrub: 0.5,
    }
  })
 

  //co2 appear
  gsap.to('.scene__co2--1', {
    opacity: 0.8,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--6",
      start: "top top",
      end: "+=500px",
      scrub: 0.5,
    }
  })

  gsap.to('.scene__co2--2', {
    opacity: 0.8,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--6",
      start: "top top",
      end: "+=800px",
      scrub: 0.5,
    }
  })

  gsap.to('.scene__co2--3', {
    opacity: 0.8,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--6",
      start: "top top",
      end: "+=1200px",
      scrub: 0.5,
    }
  })

  gsap.to('.scene__island-two', {
    x: -500,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--7",
      start: "top top",
      end: "+=700px",
      scrub: 0.5,
    }
  })

  gsap.to('.scene__wrapper', {
   scale: 2,
   transformOrigin: "0 80%",
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--9",
      start: "top center",
      end: "+=300px",
      scrub: 0.5,
    }
  })






  // media
let mm = gsap.matchMedia();

mm.add("(max-width: 950px)", () => {

  let tl = gsap.timeline();

  tl.to(".scene__island",{
    scale: 0.7,
    y: 80,
    x: -50,
  })

  tl.to(".scene__man",{
    scale: 0.6,
    x: -300,
    y: 50,  
  })

  tl.to(".scene__bottle", {
    scale: 0.6,
    x: -300,
    y: 45,
  })
  tl.to(".scene__boat", {
    scale: 0.7,
    x: -150,
  })
})

//reload reset
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}
// intersection observers


const texts = document.querySelectorAll(".intro__text");
const sectionText = document.querySelectorAll(".side__inner"); 

const options = {
  root: null,
  threshold: 1,
  rootMargin: "50px",
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
sectionText.forEach((text2) => {
  observer.observe(text2);
});
