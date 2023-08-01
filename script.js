var crsr = document.querySelector(".cursor")
var crsr_blur = document.querySelector(".cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsr_blur.style.left = dets.x - 200 + "px"
    crsr_blur.style.top = dets.y -200 + "px"

})


gsap.to(".header",{
    backgroundColor: "#121010",
    height: "50px",
    duration: 1,
    scrollTrigger: {
        trigger:".header",
        scroller:"body",
        duration: 1,
        start: "top -10p%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to(".main",{
    backgroundColor: "#121010",
    duration: 10,
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -35%",
        end: "top -100%",
        scrub: 1
    }
})