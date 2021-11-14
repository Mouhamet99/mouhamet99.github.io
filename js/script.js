window.onload = ()=>{
    // let svg = document.querySelector('path.cls-0')
    // svg.addEventListener("hover", (e)=>{
    //     e.style.fill = "#ce0033"
    // })
    // =============
    // 
    //==============
    let sections = document.querySelectorAll(".row-secondary")
    let menus = document.querySelectorAll(".secondary-menu")
    
    window.addEventListener('scroll', ()=>{
        // let section1 = sections[1].getBoundingClientRect()
        // if(section1.y <= 0 &&  section1.y + section1.height >= 500) {
        //     if (menus[1].classList.contains("d-none")) {
        //         menus[1].classList.toggle("d-none")
        //     }
            
        //     // console.log("display")
        // } else if (!menus[1].classList.contains("d-none")) {
        //     menus[1].classList.toggle("d-none")
        //     // console.log("not display")
        // }
        
        // let section2 = sections[0].getBoundingClientRect()
        // if(section2.y <= 0 &&  section2.y + section2.height >= 500) {
        //     if (menus[0].classList.contains("d-none")) {
        //         menus[0].classList.toggle("d-none")
        //     }
            
        //     // console.log("display")
        // } else {
        //     if (!menus[0].classList.contains("d-none")) {
        //         menus[0].classList.toggle("d-none")
        //     }
        //     // console.log("not display")
        // }   
        sections.forEach((elt,index)=>{

            elt = sections[index].getBoundingClientRect()

            if(elt.y <= 0 &&  elt.y + elt.height >= 500) {
                if (!menus[index].classList.contains("sp-hidden-left")) {
                    menus[index].classList.toggle("sp-hidden-left")
                    // menus[index].style.left= "5%"
                }
            } else if (menus[index].classList.contains("sp-hidden-left")) {
                menus[index].classList.toggle("sp-hidden-left")
                // menus[index].style.left= "-50%"
            }   
        })
    })
    

}
