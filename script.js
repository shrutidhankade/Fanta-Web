let tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
    // markers:true
}});
tl.to("#fenta",{
    top:"115%",
    left:"12%"
},'a').to("#slice",{
    top:"165%",
    left:"22%"
},'a').to("#orangess",{
    top:"155%",
    right:"0%",
    width:"20%"
},'a').to("#leaf",{
    top:"110%",
    left:"80%",
    width:"20%",
    rotate:"-180deg"
},'a').to("#leaf2",{
    top:"100%",
    left:"0%",
    width:"20%",
    // rotate:"-180deg"
},'a');


let tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
    markers:false
}});


tl2.from(".lemon1",{
    rotate:"-90deg",
    left:"-50%",
    top:"110%"
},'a').from("#lemon2",{
    rotate:"-90deg",
    top:"110%",
    right:"-100%",
},'a').from("#ccoca",{
    top:"110%",
    rotate:"90deg",
    right:"-150%",
},'a').from("#cpapsi",{
    rotate:"90deg",
    top:"110%",
    right:"100%",
},'a')

tl2.to("#slice",{
    top:"200%",
    left:"40%",
    width:"20vw"
},'c').to("#fenta",{
    top:"220%",
    width:"12%",
    left:"44%",
},'c')
