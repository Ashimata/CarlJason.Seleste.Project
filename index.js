let scrollInterval;

function startAutoScroll() {
    scrollInterval = setInterval(function() {
        document.querySelector('.sellersarrows1').click();
    }, 3000);
}

function startReverseAutoScroll() {
    setTimeout(function() {
        clearInterval(scrollInterval);
        scrollInterval = setInterval(function() {
            document.querySelector('.sellersarrows').click();
        }, 3000); 
    }, 3000);
}

startAutoScroll();
startReverseAutoScroll();

document.querySelector('.sellersarrows').addEventListener('mouseover', function() {
    clearInterval(scrollInterval);
    this.classList.add('active');
});

document.querySelector('.sellersarrows1').addEventListener('mouseover', function() {
    clearInterval(scrollInterval);
    this.classList.add('active');
});


document.querySelector('.sellersarrows').addEventListener('mouseout', function() {
    startAutoScroll();
    this.classList.remove('active');
});

document.querySelector('.sellersarrows1').addEventListener('mouseout', function() {
    startAutoScroll();
    this.classList.remove('active');
});

document.querySelector('.sellersarrows').addEventListener('click', function() {
    document.querySelector('.sellersarrows1').classList.remove('active');
    this.classList.add('active');
});

document.querySelector('.sellersarrows1').addEventListener('click', function() {
    document.querySelector('.sellersarrows').classList.remove('active');
    this.classList.add('active');
});


document.querySelectorAll('.sellerblock').forEach(function(sellerBlock) {
    sellerBlock.addEventListener('transitionend', function() {
        const lastItem = document.querySelector('.sellerblock:last-child');
        if (sellerBlock === lastItem) {
            document.querySelector('.sellersarrows1').click();
        }
    });
});

document.querySelector('.sellersarrows').addEventListener('click', function() {
    smoothScroll(document.querySelector('#root1'), -300, 500); 
});

document.querySelector('.sellersarrows1').addEventListener('click', function() {
    smoothScroll(document.querySelector('#root1'), 300, 500); 
});



function smoothScroll(element, distance, duration) {
    const start = element.scrollLeft;
    const startTime = performance.now();
    
    function scroll(timestamp) {
        const currentTime = timestamp - startTime;
        const scrollAmount = Math.easeInOutQuad(currentTime, start, distance, duration);
        element.scrollLeft = scrollAmount;
        if (currentTime < duration) {
            requestAnimationFrame(scroll);
        }
    }
    
    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    
    requestAnimationFrame(scroll);
}

const product = [
    {
        id: 1,
        image: 'images/product1.jpg',
        title: 'Samsung 8kg 5 star fully automatic',
        sale: 'Sale 45%',
        btntitle: 'AURARTS',
        price: '$1099.00',
        available: 134, 
    },
    {
        id: 2,
        image: 'images/product2.jpg',
        title: 'Log cam with color night vision',
        sale: 'Sale 58%',
        btntitle: 'MASSIVE',
        price: '$42.99',
        available: 47, 
    },
    {
        id: 3,
        image: 'images/product3.jpg',
        title: 'Hybrid wireless over ear headphones',
        sale: 'Sale 20%',
        btntitle: 'STARWALKS',
        price: '$47.99',
        available: 23, 
    },
    {
        id: 4,
        image: 'images/product4.jpg',
        title: 'Apple smart watch Series 8 sport band',
        sale: 'Sale 27%',
        btntitle: 'AEROSTABLE',
        price: '$217.70',
        available: 50, 
    }
]

document.getElementById('root').innerHTML = product.map((item) => {
    return (
        '<div class="deal-card">' +
        '<img src="' + item.image + '" alt="Product Image">' +
        '<div class="deal-sales">' +
        '<h1>' + item.sale + '</h1>' +
        '</div>' +
        '<div class="deal-description">' +
        '<div class="deal-title">' +
        '<a href="#">' + item.btntitle + '</a>' +
        '</div>' +
        '<h2>' + item.title + '</h2>' +
        '<h5>' + item.price + '</h5>' +
        '<span> Available: ' + item.available + ' Products </span>' +
        '<button> <i class="bi bi-bag-check"></i> ADD TO CART </button>' +
        '</div>' +
        '</div>'
    );
}).join('');

var style = document.createElement('style');
var position = 'right';

style.innerHTML = `@keyframes my-animation {
    0% { ${position}: -${document.querySelector('.text').offsetWidth + 15}px; }
    100% { ${position}: 100%; }
}`;

document.head.appendChild(style);

const product1 = [
    {
        id: 1,
        image: 'images/SanDisk/pic1.jpg',
        title: 'SanDisk extreme portable SSD drive',
        price: '$539.00',
    },
    {
        id: 2,
        image: 'images/Canon/pic1.jpg',
        title: 'Canon EOS rebel T7 DSLR camera',
        price: '$109.99',
    },
    {
        id: 3,
        image: 'images/Google/pic1.jpg',
        title: 'Google pixel 6 pro 5G android phone',
        price: '$399.99',
    },
    {
        id: 4,
        image: 'images/Business/pic1.jpg',
        title: 'Business computer monitor full HD',
        price: '$103.69',
    },
    {
        id: 5,
        image: 'images/Arlo/pic1.jpg',
        title: 'Arlo essential spotlight camera',
        price: '$49.95',
    },
]

document.getElementById('root1').innerHTML = product1.map((item) => {
    return (
        '<div class="sellercards">'+
        '<div class="seller-img">'+
        '<img src="' + item.image + '" alt="">'+
        '</div>'+
        '<div class="sellerdescription">'+
        '<div class="seller-ratings">'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '</div>'+
        '<h1>' + item.title + '</h1>'+
        '<h2>' + item.price + '</h2>'+
        '</div>'+
        '</div>'
    );
}).join('');

const product2 = [
    {
        id: 1,
        image: 'images/product1/demo1.jpg',
        title: 'Link deco WiFi 6 mesh system deco',
        price: '$109.99',
    },
    {
        id: 2,
        image: 'images/product1/demo2.jpg',
        title: 'SanDisk extreme portable SSD drive',
        price: '$539.99',
    },
    {
        id: 3,
        image: 'images/product1/demo3.jpg',
        title: 'Smart portable mini bluetooth speaker',
        price: '$49.95',
    },
    {
        id: 4,
        image: 'images/product1/demo4.jpg',
        title: 'Wireless speaker dual pairing bluetooth 5.0',
        price: '$31.99',
    },
    {
        id: 5,
        image: 'images/product1/demo9.jpg',
        title: 'Business computer monitor full HD',
        price: '$103.69',
    },
    {
        id: 6,
        image: 'images/product1/demo10.jpg',
        title: 'Tile locator mate bluetooth tracker',
        price: '$39.99',
    },
]

document.getElementById('root2').innerHTML = product2.map((item) => {
    return (
        '<div class="sales-cards">'+
        '<div class="sales-img">'+
        '<img src="' + item.image + '" alt="">'+
        '</div>'+
        '<div class="salesdescription">'+
        '<div class="sales-ratings">'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '</div>'+
        '<h1>' + item.title + '</h1>'+
        '<h2>' + item.price + '</h2>'+
        '</div>'+
        '</div>'
    );
}).join('');

const product3 = [
    {
        id: 1,
        image: 'images/product1/demo5.jpg',
        title: 'Shure vocal dynamic microphone podcast',
        price: '$399.00',
    },
    {
        id: 2,
        image: 'images/product1/demo6.jpg',
        title: 'Portable 15.8 inch FHD external monitor',
        price: '$189.99',
    },
    {
        id: 3,
        image: 'images/product1/demo7.jpg',
        title: 'Echo dot smart speaker with alexa',
        price: '$69.98',
    },
    {
        id: 4,
        image: 'images/product1/demo10.jpg',
        title: 'GoPro black waterproof camera',
        price: '$399.99',
    },
    {
        id: 5,
        image: 'images/product1/demo11.jpg',
        title: 'Canon all in one wireless printer home',
        price: '$99.99',
    },
    {
        id: 6,
        image: 'images/product1/demo12.jpg',
        title: 'Acer nitro 5 gaming laptop IPS display',
        price: '$1,049.99',
    },
]

document.getElementById('root3').innerHTML = product3.map((item) => {
    return (
        '<div class="sales-cards">'+
        '<div class="sales-img">'+
        '<img src="' + item.image + '" alt="">'+
        '</div>'+
        '<div class="salesdescription">'+
        '<div class="sales-ratings">'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '</div>'+
        '<h1>' + item.title + '</h1>'+
        '<h2>' + item.price + '</h2>'+
        '</div>'+
        '</div>'
    );
}).join('');

const product4 = [
    {
        id: 1,
        image: 'images/product1/electronic1.jpg',
        title: 'Google pixel 6 pro 5G android phone',
        price: '$399.99',
    },
    {
        id: 2,
        image: 'images/product1/electronic2.jpg',
        title: 'LTE wireless router, mobile hotspot',
        price: '$189.99',
    },
    {
        id: 3,
        image: 'images/product1/electronic3.jpg',
        title: 'Meet echo dot kids smart speaker',
        price: '$69.98',
    },
    {
        id: 4,
        image: 'images/product1/electronic4.jpg',
        title: 'Spotlight security camera outdoor',
        price: '$399.99',
    }
]

document.getElementById('root4').innerHTML = product4.map((item) => {
    return (
        '<div class="special-card">' +
        '<img src="' + item.image + '" alt="Product Image">' +
        '<div class="special-sales">' +
        '</div>' +
        '<div class="special-description">' +
        '<div class="special-title">' +
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '</div>' +
        '<h2>' + item.title + '</h2>' +
        '<h5>' + item.price + '</h5>' +
        '</div>' +
        '</div>'
    );
}).join('');

const product5 = [
    {
        id: 1,
        image: 'images/product1/electronic5.jpg',
        title: 'Beelink mini ryzen mini computer',
        price: '$103.69', 
    },
    {
        id: 2,
        image: 'images/product1/electronic6.jpg',
        title: 'Vortex optics crossfire binoculars',
        price: '$39.99', 
    },
    {
        id: 3,
        image: 'images/product1/electronic7.jpg',
        title: 'Kasa smart plug energy monitoring',
        price: '$99.99',
    },
    {
        id: 4,
        image: 'images/product1/electronic8.jpg',
        title: 'Google nest learning thermostat',
        price: '$1,049.99',
    }
]

document.getElementById('root5').innerHTML = product5.map((item) => {
    return (
        '<div class="special-card">' +
        '<img src="' + item.image + '" alt="Product Image">' +
        '<div class="special-sales">' +
        '</div>' +
        '<div class="special-description">' +
        '<div class="special-title">' +
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '</div>' +
        '<h2>' + item.title + '</h2>' +
        '<h5>' + item.price + '</h5>' +
        '</div>' +
        '</div>'
    );
}).join('');

const product6 = [
    {
        id: 1,
        image: 'images/company/demo1.jpg',
        title: 'Big sale 25% off',
    },
    {
        id: 2,
        image: 'images/company/demo3.jpg',
        title: 'Sale! Upto 25% off',
    },
    {
        id: 3,
        image: 'images/company/demo5.jpg',
        title: 'Save upto 25% off',
    },
    {
        id: 4,
        image: 'images/company/demo7.jpg',
        title: 'Sale! Upto 70% off',
    },
    {
        id: 5,
        image: 'images/company/demo9.jpg',
        title: 'Upto 50% off',
    },
    {
        id: 6,
        image: 'images/company/demo11.jpg',
        title: 'Sale! Upto 20% off',
    }
]

document.getElementById('root6').innerHTML = product6.map((item) => {
    return (
        '<div class="company-card">' +
        '<div class="company-img">' +
        '<img src="' + item.image + '" alt="Product Image">' +
        '</div>' +
        '<div class="company-sales">' +
        '</div>' +
        '<div class="company-description">' +
        '<div class="company-title">' +
        '</div>' +
        '<h2>' + item.title + '</h2>' +
        '</div>' +
        '</div>'
    );
}).join('');

const product7 = [
    {
        id: 1,
        image: 'images/company/demo13.jpg',
        title: 'Upto 70% off',
    },
    {
        id: 2,
        image: 'images/company/demo2.jpg',
        title: 'Sale! Upto 30% off',
    },
    {
        id: 3,
        image: 'images/company/demo15.jpg',
        title: 'Sale! Upto 12% off',
    },
    {
        id: 4,
        image: 'images/company/demo16.jpg',
        title: 'New! Collection',
    },
    {
        id: 5,
        image: 'images/company/demo4.jpg',
        title: 'Sale! Flat 10% off',
    },
    {
        id: 6,
        image: 'images/company/demo18.jpg',
        title: 'Flat 15% off',
    }
]

document.getElementById('root7').innerHTML = product7.map((item) => {
    return (
        '<div class="company-card">' +
        '<div class="company-img">' +
        '<img src="' + item.image + '" alt="Product Image">' +
        '</div>' +
        '<div class="company-sales">' +
        '</div>' +
        '<div class="company-description">' +
        '<div class="company-title">' +
        '</div>' +
        '<h2>' + item.title + '</h2>' +
        '</div>' +
        '</div>'
    );
}).join('');


const product8 = [
    {
        id: 1,
        image: 'images/SanDisk/pic1.jpg',
        title: 'SanDisk extreme portable SSD drive',
        price: '$539.00',
    },
    {
        id: 2,
        image: 'images/Canon/pic1.jpg',
        title: 'Canon EOS rebel T7 DSLR camera',
        price: '$109.99',
    },
    {
        id: 3,
        image: 'images/Google/pic1.jpg',
        title: 'Google pixel 6 pro 5G android phone',
        price: '$399.99',
    },
    {
        id: 4,
        image: 'images/Business/pic1.jpg',
        title: 'Business computer monitor full HD',
        price: '$103.69',
    },
    {
        id: 5,
        image: 'images/Arlo/pic1.jpg',
        title: 'Arlo essential spotlight camera',
        price: '$49.95',
    },
]

document.getElementById('root8').innerHTML = product8.map((item) => {
    return (
        '<div class="product-cards">'+
        '<div class="product-img">'+
        '<img src="' + item.image + '" alt="">'+
        '</div>'+
        '<div class="productdescription">'+
        '<div class="product-ratings">'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '<span><i class="bi bi-star-fill"></i></span>'+
        '</div>'+
        '<h1>' + item.title + '</h1>'+
        '<h2>' + item.price + '</h2>'+
        '</div>'+
        '</div>'
    );
}).join('');


const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
       
        window.scrollTo(0, c - c / 20);
    }
};




let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        if (currentScrollPos === 0) {
            document.getElementById('header').style.top = '0';
        }
    } else {
        document.getElementById('header').style.top = '-40px';
    }
    prevScrollPos = currentScrollPos;
});

let showTimeoutId;
let isScrolling = false;
let scrollThreshold = 1;
let isNavbarHidden = false;

window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById('navbar');
    const bodyHeight = document.body.scrollHeight - document.body.clientHeight;

    if (currentScrollPos > scrollThreshold) {
       
        if (prevScrollPos > currentScrollPos) {
         
            if (isNavbarHidden) {
                navbar.style.top = '0';
                isNavbarHidden = false;
            }
        } else {
          
            if (!isNavbarHidden) {
                navbar.style.top = '-475px';
                isNavbarHidden = true;
                clearTimeout(showTimeoutId);
                showTimeoutId = setTimeout(function() {
                    navbar.style.top = '-40px';
                }, 600);
            }
        }
    } else {
       
        if (isNavbarHidden) {
            navbar.style.top = '0';
            isNavbarHidden = false;
        }
    }


    if (currentScrollPos >= bodyHeight - 1) {
        if (isNavbarHidden) {
            navbar.style.top = '0';
            isNavbarHidden = false;
        }
    }

    prevScrollPos = currentScrollPos;
});


{
    
    window.addEventListener('scroll', function() {
        const preBuiltSection = document.querySelector('.pre-built');
        if (window.pageYOffset > 100) {
            preBuiltSection.classList.add('visible');
        } else {
            preBuiltSection.classList.remove('visible');
        }
    });
    
}

{
    window.addEventListener('scroll', function() {
        const headerSection = document.querySelector('.header1');
        const headerList = document.querySelector('.header1 ul');
        const scrollHeight = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
        if (scrollHeight >= documentHeight - 100) {
            headerSection.classList.add('hidden');
            headerList.style.marginLeft = '-100px';
        } else {
            headerSection.classList.remove('hidden');
            headerList.style.marginLeft = '0';
        }
    });
}









