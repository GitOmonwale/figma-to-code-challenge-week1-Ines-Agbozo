
    // barre de navigation responsive
    const hamburger = document.querySelector(".hamburger")
    const menu = document.querySelector(".menu ul")
    const cross = document.querySelector(".cross")

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('mobile-menu')
    })

    cross.addEventListener('click', () => {
        menu.classList.remove('mobile-menu')

    })


   
    //  carousel de la section services
    const buttons = document.querySelectorAll(".button");
    const cards = document.querySelectorAll(".card");

    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const calcnextslide = e.target.id === "next" ? 1 : -1;
            const slideActive = document.querySelector(".active");
            newIndex = calcnextslide + [...cards].indexOf(slideActive);
            
            if (newIndex < 0 ) newIndex =[...cards].length - 1;
        if (newIndex >= [...cards].length) newIndex = 0;
            cards[newIndex].classList.add("active");
            slideActive.classList.remove("active");

        });
    });


    // caroussel de la sections testimonial
    const buttonstesti = document.querySelectorAll(".button-testi");
    const testimonials = document.querySelectorAll(".testimonial_details");
  
    buttonstesti.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const calcnextslideTesti = e.target.id === "next-testi" ? 1 : -1;
            const slideActiveTesti = document.querySelector(".active-testi");
            newIndexTesti = calcnextslideTesti + [...testimonials].indexOf(slideActiveTesti);
            console.log(newIndexTesti)
        if (newIndexTesti < 0 ) newIndexTesti =[...testimonials].length - 1;
        if (newIndexTesti >= [...testimonials].length) newIndexTesti = 0;
            testimonials[newIndexTesti].classList.add("active-testi");
            slideActiveTesti.classList.remove("active-testi");
       
        });
    });

