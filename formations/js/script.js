window.onload = ()=>{
    // let searchBtn = document.querySelector('input[name="search"]');
    // let searchLabel = document.querySelector('label[for="search"]');
    // searchBtn.addEventListener('focus', ()=>{
    //     searchLabel.style.border = "1 px solid #cee0033"
    // });

    // let svg = document.querySelector('path.cls-0')
    // svg.addEventListener("hover", (e)=>{
    //     e.style.fill = "#ce0033"
    // })

    // =============
    // Gestion  active bar menu  par section (parcours / public ) 
    //==============
    let publicMenusItems = document.querySelectorAll('.menu-public  p')
    let activePublicMenuItem = document.querySelector('.menu-public  p.active')
    updateActiveItem(publicMenusItems,activePublicMenuItem )
    
    let parcoursMenusItems = document.querySelectorAll('.menu-parcours  p');
    let activeParcoursMenuItem = document.querySelector('.menu-parcours  p.active')
    updateActiveItem(parcoursMenusItems,activeParcoursMenuItem )
    
    let publicSecondaryMenusItems = document.querySelectorAll('.secondary-menu-public  p')
    let activePublicSecondaryMenuItem = document.querySelector('.secondary-menu-public  p.active')
    updateActiveItem(publicSecondaryMenusItems, activePublicSecondaryMenuItem )
    
    let parcoursSecondaryMenusItems = document.querySelectorAll('.secondary-menu-parcours  p');
    let activeParcoursSecondaryMenuItem = document.querySelector('.secondary-menu-parcours  p.active')
    updateActiveItem(parcoursSecondaryMenusItems, activeParcoursSecondaryMenuItem )

    function updateActiveItem(elements, activeElement){
        elements.forEach(element=>{
            element.addEventListener('click', function(e){
                console.log(activeElement)
                activeElement.classList.toggle('active')
                element.classList.toggle('active')
                activeElement = element
                console.log(activeElement)
            })
        })
    }


    // =============
    // 
    //==============
    let sections = document.querySelectorAll(".row-secondary")
    let menus = document.querySelectorAll(".secondary-menu")
    
    window.addEventListener('scroll', ()=>{
        
        sections.forEach((elt,index)=>{

            elt = sections[index].getBoundingClientRect()

            if(elt.y <= 0 &&  elt.y + elt.height >= 500) {
                if (!menus[index].classList.contains("sp-hidden-left")) {
                    menus[index].classList.toggle("sp-hidden-left")
                    menus[index].classList.toggle("classOn")
                    menus[index].style.display= "inline-block"
                }
            } else if (menus[index].classList.contains("sp-hidden-left")) {
                menus[index].classList.toggle("sp-hidden-left")
                // menus[index].classList.toggle("d-none")
                menus[index].style.display= "none"
                // menus[index].style.left= "-50%"
            }   
        })
    })
    

}
