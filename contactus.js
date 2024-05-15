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

document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('close');
    const checkbox = document.getElementById('check');

    
    closeBtn.addEventListener('click', function() {
        checkbox.checked = false;
    });

    
    checkbox.addEventListener('click', function() {
        if (!this.checked) {
            closeBtn.style.left = '-100%'; 
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var check = document.getElementById('check');
    var body = document.querySelector('body');

    check.addEventListener('change', function () {
        if (check.checked) {
            body.classList.add('menu-active');
        } else {
            body.classList.remove('menu-active');
        }
    });
});