
var navDialog=document.querySelector('#navdialog')


function handleMenu(){
    navDialog.classList.toggle('hidden');
}


gsap.to("#line1",{
    x:0,
    ease: "linear" ,
    scrollTrigger:{
        trigger:"#line1",
        scroller:"body",
         scrub:1,
    }  
})
gsap.from("#line2",{
    x:0,
    ease: "linear" ,
    scrollTrigger:{
        trigger:"#line2",
        scroller:"body",
        scrub:2,
    }  
})
gsap.to("#line3",{
    x:0,
    ease: "linear" ,
    scrollTrigger:{
        trigger:"#line3",
        scroller:"body",
        scrub:1,
    }  
})
gsap.to("#scroll",{
    x:0,
    ease:"linear",
    scrollTrigger:{
        trigger:"#scroll",
        scroller:"body",
        scrub:0.5
    }
})

const tl=gsap.timeline()


tl.from('nav>*',{
    y:-50,
    opacity:0,
    stagger:0.3,
    duration:1
})
tl.from("#hero",{
    x:-100,
    opacity:0,
    stagger:0.3,
})
