
///--- WEBSITE - SMOOTH - SCROLL - LOCOMOTIVE ----/////

function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smartphone: { smooth: true },
    tablet: { smooth: true },
    lerp: 0.07,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  window.addEventListener("load", () => {
    locoScroll.update();
    ScrollTrigger.refresh();
  });
}

locomotiveAnimation();

///--- HEADER - SECTION - ANIMATIONS ----/////

const header = document.querySelector(".header");

gsap.from(header, {
  y: "-100%",
  duration: 2.4,
  ease:"power1.out"
});

const buttonToggler = document.querySelector(".nav-open-btn");
const navSlider = document.querySelector(".nav-slider");
const navLink = document.querySelectorAll(".navbar-link");
const navsliderLink = document.querySelectorAll(".navbar-slider-link");
const navIcon = buttonToggler.querySelector("ion-icon");

let navOpen = false;

buttonToggler.addEventListener("click", () => {

  navOpen = !navOpen;

  if(navOpen){
    
    gsap.to(navSlider,{
      height: "auto",
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(navsliderLink, {
      y: -20,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      delay: 0.1,
      ease: "power2.out",
    });

    gsap.to(navLink, {
      opacity: 0
    });

    navIcon.setAttribute("name", "close-outline");

  }else{
    
    gsap.to(navSlider,{
      height: 0,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.to(navLink, {
      opacity: 1
    });

     navIcon.setAttribute("name", "reorder-two-outline");

  }
});

///--- HOME - SECTION - ANIMATIONS ----/////

const mainTitle = document.querySelector(".main-title h1");

let mainLetters = mainTitle.textContent.split("");

mainTitle.innerHTML = mainLetters.map(letter => `<span class="letter">${letter}</span>`).join("");

gsap.from(mainTitle.querySelectorAll(".letter"),{
  y: "100%",
  duration:2.4,
  stagger: 0.08,
  ease:"power3.out"
});

const mainDescription = document.querySelector(".description");

gsap.from(mainDescription, {
  y: "100%",
  duration: 2.4,
  ease:"power3.out"
});

const homeTxt = document.querySelector(".home-text");

const homeIcon = document.querySelector(".home-text ion-icon");

const homeScroller = document.querySelector(".scroller");

gsap.from(homeScroller, {
  opacity: 0,
  duration: 3,
  delay: 0.5,
  ease: "power3.out"
});

gsap.to(homeIcon,{
  rotate: -40,
  duration: 2,
  delay: 1,
  ease: "power3.out"
});

gsap.from(homeTxt,{
  x: 30,
  duration: 2,
  ease: "power3.out",
  ScrollTrigger: {
    scroller: "#main"
  }
});


///--- ABOUT - SECTION - ANIMATIONS ----/////

gsap.registerPlugin(ScrollTrigger); 

const videoHolder = document.querySelector(".about-video-holder")

const video = document.querySelector(".about-video-holder video");

gsap.from(videoHolder, {
  y: 100,
  duration: 2.4,
  ease: "power1.out"
});

gsap.to(video,{
  scale: 1,
  ease:"power2.out",
  scrollTrigger :{
    trigger: ".about-video-holder",
    scroller: "#main",
    start:"top bottom",
    end:"bottom top",
    scrub: true,
  }
});

const aboutTitle = document.querySelector(".cont-ttl h2");

let aboutLetters = aboutTitle.textContent.split("");

aboutTitle.innerHTML = aboutLetters.map(letter => `<span class="letter">${letter}</span>`).join("");

gsap.from(aboutTitle.querySelectorAll(".letter"), {
  y: 100,
  opacity: 0,
  duration: 2,
  stagger: 0.05,
  ease: "power3.out",
  scrollTrigger: {
    trigger: aboutTitle,
    scroller: "#main",
    start: "top 95%",
    triggerActions: "play none none play"
  }
});

const abtParagraph = document.querySelector(".about-cont-des p");

const abtWords = abtParagraph.textContent.trim().split(/\s+/);

abtParagraph.innerHTML = "";

abtWords.forEach(word => {
  const span = document.createElement("span");
  span.classList.add("about-cont-word");
  span.textContent = word;
  abtParagraph.appendChild(span);
});

const aboutParagraph = document.querySelectorAll(".about-cont-word");

gsap.to(aboutParagraph, {
  x: 0,
  opacity: 1,
  filter: "blur(0px)",
  duration: 2,
  stagger: 0.05,
  ease: "power3.out",
  scrollTrigger: {
    trigger: abtParagraph,
    scroller:"#main",
    start: "top 95%",
    toggleActions:"play none none reverse"
  }
});

const resumeBtn = document.querySelector(".resume-btn");

gsap.from(resumeBtn, {
  y: 20,
  opacity: 0,
  duration: 2,
  delay: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: resumeBtn,
    scroller: "#main",
    start: "top 95%",
    toggleActions:"play none none reverse"
  }
});


///--- WORK - SECTION - ANIMATIONS ----/////

const workTitle = document.querySelector(".hd-ttl h2");

let workLetters = workTitle.textContent.split("");
workTitle.innerHTML = workLetters.map(letter => `<span class="letter">${letter}</span>`).join("");

gsap.from(workTitle.querySelectorAll(".letter"), {
    y: 100,
    opacity: 0,
    stagger:0.05,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: workTitle,
      scroller: "#main",
      start: "top 95%",
      toggleActions: "play none none reverse"
    }
  });

const workTxt = document.querySelector(".works-header-text");

const workIcon = document.querySelector(".wrk-hd-icon ion-icon");

const revealTxt = document.querySelector(".hd-rvl-txt p")

gsap.from(workTxt, {
  x: 30,
  duration: 2,
  ease:"power3.out",
  scrollTrigger: {
    trigger: workTxt,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

gsap.to(workIcon,{
  rotate: -40,
  duration: 2,
  delay: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: workTxt,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(revealTxt, {
  y: 30,
  opacity: 0,
  duration: 1.7,
  delay: 0.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: workTxt,
    scroller: "#main",
    start:"top 95%",
    toggleActions: "play none none reverse"
  }
});

const hashContainer = document.querySelector(".hashtags-container");

gsap.utils.toArray(".hashtag").forEach((tag,i) => {
  
  gsap.from(tag, {
    x: -20,
    opacity: 0,
    filter: "blur(5px)",
    duration: 1.5,
    delay: i * 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".works",
      scroller: "#main",
      start: "top 95%",
      toggleActions: "play none none reverse"
    }
  })
});


const hashtags = document.querySelectorAll(".hashtag");

const posters = document.querySelectorAll(".image-holder");

hashtags.forEach(tag => {

  const key = tag.dataset.key;

  tag.addEventListener("mouseenter", () => {

    posters.forEach(poster => {
 
      const zIndex = window.getComputedStyle(poster).zIndex;

      if(poster.dataset.hashtag === key){

        

        gsap.to(poster,{
          y: -200,
          scale:1.05,
          duration: 0.6,
          ease: "power3.out",
        })
      }
    })
  });

  tag.addEventListener("mouseleave", () => {

    posters.forEach(poster => {
      gsap.to(poster, {
        y:0,
        scale: 1,
        duration: 0.6,
        ease: "power3.inOut",

      })
    })
  })
});

///--- PROJECT - SECTION - ANIMATIONS ----/////

const projectTitle = document.querySelector(".proj-ttl h2");

let projLetters = projectTitle.textContent.split("");

projectTitle.innerHTML = projLetters.map(letter => `<span class="letter">${letter}</span>`).join("");

gsap.from(projectTitle.querySelectorAll(".letter"), {
  y: 100,
  opacity: 0,
  stagger: 0.05,
  duration: 1.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: projectTitle,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

const projTxt = document.querySelector(".projects-header-text");

const projIcon = document.querySelector(".proj-hd-icon ion-icon");

gsap.from(projTxt, {
  x: 30,
  duration: 2,
  ease:"power3.out",
  scrollTrigger: {
    trigger: projTxt,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

gsap.to(projIcon,{
  rotate: -40,
  duration: 2,
  delay: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: projTxt,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

const projsecTxt = document.querySelectorAll(".proj-sec-txt h3");

const projsecTtl = document.querySelectorAll(".proj-sec-ttl h2");

gsap.from(projsecTxt,{
  y: -20,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: projsecTxt,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

projsecTtl.forEach(ttl => {
  let ttlLetters = ttl.textContent.split("");
  ttl.innerHTML = ttlLetters.map(letter => `<span class="letter">${letter}</span>`).join("");

  gsap.from(ttl.querySelectorAll(".letter"),{
  y: 40,
  opacity: 0,
  duration: 1.5,
  stagger: 0.05,
  ease: "power3.out",
  scrollTrigger: {
    trigger: projsecTxt,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
  })
});

const projtxtTrigger = document.querySelectorAll(".txt-trigger h3");

const projttlTrigger = document.querySelectorAll(".ttl-trigger h2");

gsap.from(projtxtTrigger,{
  y: -20,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: projtxtTrigger,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

projttlTrigger.forEach(triggerTtl => {

  let triggerLetters = triggerTtl.textContent.split("");

  triggerTtl.innerHTML = triggerLetters.map(letter => `<span class="letter">${letter}</span>`).join("");

  gsap.from(triggerTtl.querySelectorAll(".letter"), {
  y: 40,
  opacity: 0,
  duration: 1.5,
  stagger: 0.05,
  ease: "power3.out",
  scrollTrigger: {
    trigger: projttlTrigger,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
  })
});


const holders = document.querySelectorAll(".proj-img-wrapper");

holders.forEach(holder => {

   const img = holder.querySelector("img");

   holder.addEventListener("mousemove", (e) => {

    const rect = holder.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    const rotateX = offsetY * 12;
    const rotateY = offsetX * 12;

    img.style.transform = `scale(1.03) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.transition = "transform 0.5s ease";
   })

   holder.addEventListener("mouseleave", () => {

    img.style.transform = `scale(1) rotateX(0deg) rotateY(0deg)`;
    img.style.transition = "transform 0.5s ease";

   })
});




///--- PROCESS - SECTION - ANIMATIONS ----/////

const processTitle = document.querySelector(".process-hd-ttl h2");

let processLetters = processTitle.textContent.split("");

processTitle.innerHTML = processLetters.map(letter => `<span class="letter">${letter}</span>`).join("");

gsap.from(processTitle.querySelectorAll(".letter"), {
  y:100,
  opacity: 0,
  stagger: 0.05,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: processTitle,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

const processTxt = document.querySelector(".process-header-text");

const processIcon = document.querySelector(".process-hd-icon ion-icon")

gsap.from(processTxt, {
  x: 30,
  duration: 2,
  ease:"power3.out",
  scrollTrigger: {
    trigger: processTxt,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

gsap.to(processIcon,{
  rotate: -40,
  duration: 2,
  delay: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger:  processTxt,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

const elements = document.querySelectorAll(".elem");

elements.forEach(elem => {

  const video = elem.querySelectorAll("video");

  const elementTxt = elem.querySelectorAll(".process-text");

  const elementIcon = elem.querySelectorAll(".elem-icons");

  let mouseX = 0;
  let mouseY = 0;

  let currentX = 0;
  let currentY = 0;

  elem.addEventListener("mouseenter", () => {

    gsap.to(video, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power3.out"
    });

    gsap.to(elementTxt, {
    x: 10,
    opacity: 0.4,
    duration: 1.5,
    ease: "power3.out"
  });

    gsap.to(elementIcon, {
      x: -10,
      opacity: 0.4,
      duration: 1.5,
      ease: "power3.out"
    });

  });

  elem.addEventListener("mouseleave", () => {

    gsap.to(video, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: "power3.out"
    })

    gsap.to(elementTxt, {
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out"
  });

     gsap.to(elementIcon, {
     x: 0,
     opacity: 1,
     duration: 1.5,
     ease: "power3.out"
    });

  });

  elem.addEventListener("mousemove", (e) => {
    const bounds = elem.getBoundingClientRect();
    mouseX = e.clientX - bounds.left;
    mouseY = e.clientY - bounds.top;
  });

  function animate(){

    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    gsap.set(video, {
      x: currentX,
      y: currentY,
      rotation: (mouseX - currentX) * 0.2,
      transformOrigin: "center"
    });

    requestAnimationFrame(animate);
  }

  animate();

});

const progressBar = document.querySelectorAll(".progress-bar");

const bottomBar =  document.querySelectorAll(".elem .progress-bar-bottom");

progressBar.forEach(progressbar =>{
  gsap.to(progressbar,{
  width: "100%",
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: progressbar,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
})
});

 gsap.to(bottomBar,{
  width: "100%",
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: bottomBar,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
})


///--- PHOTOGRAPHY - SECTION - ANIMATIONS ----/////

const photographyTitle = document.querySelector(".shc-ttl h2");

let photographyLetters = photographyTitle.textContent.split("");

photographyTitle.innerHTML = photographyLetters.map(letter => `<span class="letter">${letter}</span>`).join("");

gsap.from(photographyTitle.querySelectorAll(".letter"),{
  y: 50,
  opacity: 0,
  stagger: 0.05,
  duration: 1.6,
  ease: "power3.out",
  scrollTrigger: {
    trigger: photographyTitle,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

const photographyHashtag = document.querySelector(".shc-hashtag p");

gsap.from(photographyHashtag, {
  y:40,
  opacity: 0,
  duration: 1.6,
  ease: "power3.out",
  scrollTrigger: {
    trigger: photographyHashtag,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
    }
});

const photographyIcons = document.querySelector(".showcase-icons");

gsap.from(photographyIcons,{
  x: 20,
  opacity: 0,
  duration: 1.6,
  ease:"power3.out",
  scrollTrigger: {
    trigger: photographyIcons,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
})

///--- FOOTER - SECTION - ANIMATIONS ----/////

const footertopSec = document.querySelector(".footer-top-section");


gsap.from(footertopSec, {
  y: 30,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: footertopSec,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
})

const footerTitle = document.querySelector(".ft-ttl h1");

const footerTxt = document.querySelector(".footer-txt");

const footerIcon = document.querySelector(".footer-icon ion-icon");

gsap.from(footerTitle, {
  y: 50,
  duration: 1.8,
  ease: "power3.out",
  scrollTrigger : {
    trigger: footerTitle,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(footerTxt, {
  x: 20,
  duration: 1.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: footerTxt,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

gsap.to(footerIcon , {
  rotate: 40,
  duration: 1.8,
  delay: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: footerTxt,
    scroller: "#main",
    start: "top 95%",
    toggleActions: "play none none reverse" 
  }
});