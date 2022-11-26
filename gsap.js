<script src="https://unpkg.com/split-type"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>

<script>
window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span"
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      }
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 60%",
      onEnter: () => timeline.play()
    });
  }
 

 
  const wordsSlideFromRight = document.querySelectorAll("[words-slide-from-right]");
  wordsSlideFromRight.forEach((element) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".word"), {
      opacity: 0,
      x: "1em",
      duration: 0.6,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    });
    createScrollTrigger(element, tl);
  });

  const wordsSlideUp = document.querySelectorAll("[words-slide-up]")
  wordsSlideUp.forEach((element) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".word"), { 
      opacity: 0,
      yPercent: 100, 
      duration: 0.5,
      ease: "back.out(2)", 
      stagger: { amount: 0.5 } 
    });
    createScrollTrigger(element, tl);
  });



  const wordsRotateIn = document.querySelectorAll("[words-rotate-in]")
  wordsRotateIn.forEach((element) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".word"), { 
      rotationX: -90, 
      duration: 0.6, 
      ease: "power2.out", 
      stagger: { amount: 0.6 } 
    });
    createScrollTrigger(element, tl);
  });



  const lettersSlideIn = document.querySelectorAll("[letters-slide-in]")
  lettersSlideIn.forEach((element) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".char"), { 
      yPercent: 100, 
      duration: 0.2, 
      ease: "power1.out", 
      stagger: { amount: 0.6 } 
    });
    createScrollTrigger(element, tl);
  });


  const lettersSlideDown = document.querySelectorAll("[letters-slide-down]")
  lettersSlideDown.forEach((element) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".char"), { 
      yPercent: -120, 
      duration: 0.3, 
      ease: "power1.out", 
      stagger: { amount: 0.7 } 
    });
    createScrollTrigger(element, tl);
  });

  const lettersFadeIn = document.querySelectorAll("[letters-fade-in]")
  lettersFadeIn.forEach((element) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".char"), { 
      opacity: 0, 
      duration: 0.2, 
      ease: "power1.out", 
      stagger: { amount: 0.8 } });
    createScrollTrigger(element, tl);
  });

  const lettersFadeInRandom = document.querySelectorAll("[letters-fade-in-random]")
  lettersFadeInRandom.forEach((element) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".char"), { 
      opacity: 0, 
      duration: 0.05, 
      ease: "power1.out", 
      stagger: { amount: 0.4, from: "random" } 
    });
    createScrollTrigger(element, tl);
  });
 

  const scrubEachWord = document.querySelectorAll("[scrub-each-word]")
  scrubEachWord.forEach((element) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".word"), { 
      opacity: 0.2, 
      duration: 0.2, 
      ease: "power1.out", 
      stagger: { each: 0.4 } 
    });
  });

  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });
});
</script>
