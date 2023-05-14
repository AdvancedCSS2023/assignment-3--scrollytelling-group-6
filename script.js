
//intersection observers
const texts = document.querySelectorAll(".intro__text");
const sectionText = document.querySelectorAll(".side__inner"); 
const text3 = document.querySelectorAll(".actions__text");
const textbox = document.querySelectorAll(".learn-more__textbox2");
const man = document.querySelectorAll(".learn-more__man_2");

const options = {
  root: null,
  threshold: 0.8,
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

text3.forEach((text3) => {
  observer.observe(text3);
});

textbox.forEach((text4) => {
  observer.observe(text4);
});

man.forEach((man) => {
  observer.observe(man);
});


// ------------------------------------------------------------------------------------------/
//GSAP SCROLL ANIMATIONS
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// sticky container for the scenes frame
ScrollTrigger.create({
  trigger: '.scene',
  start: 'top top', 
  endTrigger: '#end-trigger', 
  pin: true,
  pinSpacing: false,
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// clouds moving on scroll
let clouds = gsap.timeline();

if (!prefersReducedMotion) {
ScrollTrigger.create({
    animation: clouds,
    trigger: "img",
    start: "top 70%",
    end: "300%",
    scrub: 1, 
});
}

clouds.to(".intro__clouds--one", { x: 1200 }, 0,)
clouds.to(".intro__clouds--two", { x: 900 }, 0)
clouds.to(".intro__clouds--three", { x: 600 }, 0)
clouds.to(".intro__clouds--four", { x: 500 }, 0)
clouds.to(".intro__clouds--five", { x: -900 }, 0)

// waves 

let desktop = gsap.timeline();

desktop.to('.scene__wave--one', {
    xPercent: -50,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".side__sidebox--3",
      start: "top center",
      endTrigger: "#end-trigger", 
      scrub: 1,

    }
  })
  desktop.to('.scene__wave--two', {
    xPercent: -50,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".side__sidebox--3",
      start: "top center",
      endTrigger: "#end-trigger", 
      scrub: 1,
    }
  })

desktop.to('.scene__wave--three', {
    xPercent: -50,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".side__sidebox--3",
      start: "top center",
      endTrigger: "#end-trigger", 
      scrub: 1,

    }
  })

  // bottle to ocean motion path
 
  desktop.to('.scene__bottle', {
    scrollTrigger: {
      trigger: ".side__sidebox--2",
      start: "top center",
      end: "+=400",
      scrub: 0.2,
    },
    motionPath: {
      path: "M33.834,60.412 C52.803,53.384 59.846,32.141 132.889,30.3 174.1335,29.25995 206.57465,33.52242 231.73044,50.10079 252.31246,63.66491 302.668,120.119 295.078,173.275",
      align: "self",
      autoRotate: -35,
    }});

    desktop.to('.scene__bottle', {
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
  desktop.to('.scene__man', {
    xPercent: 380,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--3",
      start: "top top",
      end: "+=400px",
      scrub: 0.5,
    }
  })

  //move island out of frame
  desktop.to('.scene__island', {
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

  desktop.to('.scene__man', {
    x: -450,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--5",
      start: "top center",
      end: "+=300px",
      scrub: 0.5,
    }
  })
  desktop.to('.scene__boat', {
    x: -450,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--5",
      start: "top center",
      end: "+=300px",
      scrub: 0.5,
    }
  })
 

  //co2 appear
  desktop.to('.scene__co2--1', {
    opacity: 0.8,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--5",
      start: "top top",
      end: "+=500px",
      scrub: 0.5,
    }
  })

  desktop.to('.scene__co2--2', {
    opacity: 0.8,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--5",
      start: "top top",
      end: "+=800px",
      scrub: 0.5,
    }
  })

  desktop.to('.scene__co2--3', {
    opacity: 0.8,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--5",
      start: "top top",
      end: "+=1200px",
      scrub: 0.5,
    }
  })
  desktop.to('.scene__co2-wrap', {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--7",
      start: "top top",
      end: "+=1000px",
      scrub: 0.5,
    }
  })

// seadive scene

desktop.to('.scene__fish-container', {
  y: -1120,
  ease: "none",
  scrollTrigger: {
    trigger: ".side__sidebox--7",
    start: "top center",
    end: "+=800px",
    scrub: 0.5,
  }
})

desktop.to('.scene__fish-container', {
  x: -1500,
  ease: "none",
  scrollTrigger: {
    trigger: ".side__sidebox--9",
    start: "top bottom",
    end: "+=700px",
    scrub: 0.5,
  }
})

//island coming in

  desktop.to('.scene__island-two', {
    x: -610,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--9",
      start: "top top",
      end: "+=700px",
      scrub: 0.5,
    }
  })  


// zoom scene
  desktop.to('.scene__wrapper', {
    keyframes: {
      scale: [1, 1.8, 1.8, 1],
   },
   transformOrigin: "0 80%",
    ease: "sine.out",
    scrollTrigger: {
      trigger: ".side__sidebox--11",
      start: "top top",
      end: "+=5000",
      scrub: 0.2,
    }
  })

  // island going out
  desktop.to('.scene__island-two', {
    x: 610,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--12",
      start: "top center",
      end: "+=300px",
      scrub: 0.5,
    }
  })

  //last island coming in
  desktop.to('.scene__island-three', {
    xPercent: -88,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--12",
      start: "top center",
      end: "+=300px",
      scrub: 0.5,
    }
  })

  // opacity 0 man

  desktop.to('.scene__man', {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--13",
      start: "top center",
      end: "+=500px",
      scrub: 0.5,
    }
  })
//opacity 1 green man

desktop.to('.scene__man-green', {
  opacity: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".side__sidebox--14",
    start: "top center",
    end: "+=300px",
    scrub: 0.5,
  }
})

desktop.to(".scene__cup",{
  xPercent: 20,
  yPercent: 70,
  scrollTrigger: {
    trigger: ".side__sidebox--14",
    start: "top top",
    end: "+=550px",
    scrub: 0.5,
  }
});
desktop.to(".scene__cup",{
  opacity: 1,
  keyframes: {
    opacity: [0, 1, 1, 0]
  },
  scrollTrigger: {
    trigger: ".side__sidebox--14",
    start: "top center",
    end: "+=1000px",
    scrub: 0.5,
  }
}); 
desktop.to(".scene__question-marks",{
  keyframes: {
    opacity: [0, 1, 1, 0]
  },
  scrollTrigger: {
    trigger: ".side__sidebox--10",
    start: "top center",
    end: "+=2000px",
    scrub: 0.5,
  }
}); 
desktop.to(".scene__bulb-idea",{
  keyframes: {
    opacity: [0, 1, 1, 0]
  },
  scrollTrigger: {
    trigger: ".side__sidebox--12",
    start: "top center",
    end: "+=2000px",
    scrub: 0.5,
  }
}); 

  // --------------------------------------------------------------//
  //  MATCHMEDIA for landscape view
let mm = gsap.matchMedia();

mm.add("(max-width: 950px)", () => {
 
  let tl = gsap.timeline();
  tl.to(".scene__bottle", {
    scale: 0.6,
  })
  tl.to(".scene__man", {
    scale: 0.6,
    x: -300,
    y: 42,
  })
  tl.to(".scene__boat", {
    scale: 0.6,
    x: -150,
  })
  tl.to(".scene__island",{
    scale: 0.7,
    y: 80,
    x: -50,
  })
  tl.to(".scene__island-two",{
    scale: 0.6,
    xPercent: 15,
  })
  tl.to(".scene__island-three",{
    scale: 0.6,
    xPercent: 15,
  })


  tl.to(".scene__man-green", {
    scale: 0.6,
    xPercent: -610,
  })

  tl.to('.scene__man', {
    xPercent: 170,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--3",
      start: "top top",
      end: "+=400px",
      scrub: 0.5,
    }
  })

  tl.to('.scene__man', {
    x: -500,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--5",
      start: "top center",
      end: "+=300px",
      scrub: 0.5,
    }
  })
  tl.to('.scene__boat', {
    x: -400,
    ease: "none",
    scrollTrigger: {
      trigger: ".side__sidebox--5",
      start: "top center",
      end: "+=300px",
      scrub: 0.5,
    }
  })  

  gsap.killTweensOf('.scene__wrapper');

  tl.to(".scene__cup",{
    xPercent: 10,
    yPercent: 40,
    scale: 0.8
  });

  tl.to(".scene__cup",{
    opacity: 1,
    keyframes: {
      opacity: [0, 1, 1, 0]
    },
    scrollTrigger: {
      trigger: ".side__sidebox--14",
      start: "top center",
      end: "+=900px",
      scrub: 0.5,
    }
  });

  gsap.killTweensOf('.scene__bulb-idea');
  tl.to(".scene__bulb-idea",{
    keyframes: {
      opacity: [0, 1, 1, 0]
    },
    scrollTrigger: {
      trigger: ".side__sidebox--12",
      start: "top center",
      end: "+=1500px",
      scrub: 0.5,
    }
  }); 

})
 
//reload reset
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}
