

{

 document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;
    const slideTrack = document.querySelector('.slide-track');

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        slideTrack.style.transition = 'transform 0.5s ease';
        slideTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    let intervalId = setInterval(nextSlide, 3000);

    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', function () {
        clearInterval(intervalId);
    });

    slider.addEventListener('mouseleave', function () {
        intervalId = setInterval(nextSlide, 3000);
    });
});  
 
}


{
 const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
       
        window.scrollTo(0, c - c / 20);
    }
}; 

}



{

// let prevScrollPos = window.pageYOffset;
// window.addEventListener('scroll', function() {
//     const currentScrollPos = window.pageYOffset;
//     if (prevScrollPos > currentScrollPos) {
//         if (currentScrollPos === 0) {
//             document.getElementById('header1').style.top = '0';
//         }
//     } else {
//         document.getElementById('header1').style.top = '-40px';
//     }
//     prevScrollPos = currentScrollPos;
// });  
  
}

// let prevScrollPos = window.pageYOffset;
// let isNavbarHidden = false;
// let scrollTimeout;
// const screenHeight = window.innerHeight;

// window.addEventListener('scroll', function() {
//     const currentScrollPos = window.pageYOffset;
//     const navbar = document.getElementById('navbar1');

//     if (currentScrollPos > prevScrollPos) {
//         // Scrolling down
//         if (!isNavbarHidden && currentScrollPos >= screenHeight) {
//             navbar.style.top = '-75px';
//             isNavbarHidden = true;
//             clearTimeout(scrollTimeout);
//             scrollTimeout = setTimeout(function() {
//                 navbar.style.top = '40px';
//                 isNavbarHidden = false;
//             }, 600);
//         }
//     } else {
//         // Scrolling up
//         navbar.style.top = '0';
//         isNavbarHidden = false;
//     }

//     // Keep the navbar visible until the end of the page
//     if (currentScrollPos >= document.body.scrollHeight - screenHeight) {
//         navbar.style.top = '0';
//         isNavbarHidden = false;
//     }

//     prevScrollPos = currentScrollPos;
// });



{
    
    function scrollToTop() {
        const startingY = window.pageYOffset;
        const dist = startingY;
        const duration = 400; 
        let start = null;
    
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percent = Math.min(progress / duration, 1);
            const easing = easingFunction(percent);
            window.scrollTo(0, startingY - (dist * easing));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            } else {
                window.scrollTo(0, 0); 
            }
        }
    
        function easingFunction(t) {

            return t * t * (3 - 2 * t);
        }
    
        window.requestAnimationFrame(step);
    }
    
    window.addEventListener('scroll', function() {
        const preBuiltSection = document.querySelector('.pre-built');
        if (window.pageYOffset > 100) {
            preBuiltSection.classList.add('visible');
        } else {
            preBuiltSection.classList.remove('visible');
        }
    });
    
}



