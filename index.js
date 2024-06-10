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
        '<div class="seller-ratings-1">'+
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
      const headerSection = document.querySelector('.social-wrapper');
      const headerList = document.querySelector('.social-icon-with-text ul');
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




{
    var Shopify = Shopify || {};
    Shopify.shop = "hongotheme.myshopify.com";
    Shopify.locale = "en";
    Shopify.currency = {"active":"USD","rate":"1.0"};
    Shopify.country = "PH";
    Shopify.theme = {"name":"Hongo - Electronic","id":131518890177,"theme_store_id":null,"role":"unpublished"};
    Shopify.theme.handle = "null";
    Shopify.theme.style = {"id":null,"handle":null};
    Shopify.cdnHost = "hongotheme.myshopify.com/cdn";
    Shopify.routes = Shopify.routes || {};
    Shopify.routes.root = "/";
}


{

    document.addEventListener('DOMContentLoaded', function() {
        const previewBarInjector = new Shopify.PreviewBarInjector({
          targetNode: document.body,
          iframeRoot: 'https://hongotheme.myshopify.com',
          iframeSrc: 'https://hongotheme.myshopify.com/preview_bar',
          previewToken: '2bl6m3tqrh17urr5',
          themeStoreId: '',
          permanentDomain: 'hongotheme.myshopify.com',
        });
        previewBarInjector.init();
      });


}

{

    window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.end');

}


{
  !function(){'use strict';const e='contact',t='account',n='new_comment',o=e=>e.map((([e,t])=>`form[action*='/${e}'] input[name='form_type'][value='${t}']`)).join(',');function c(e,t){try{const n=window.sessionStorage;for(const[o,c]of Object.entries(JSON.parse(n.getItem(t))))e.elements[o]&&(e.elements[o].value=c);n.removeItem(t)}catch{}}const s='form_type',r='cptcha';var a,m,i,u;a=window,m=document,u='ce_forms',a[i='Shopify']=a[i]||{},a[i][u]=a[i][u]||{},a[i][u].q=[],function(a,m,i,u,f){const[d,l]=function(c,s){const r=s?[[e,e],['blogs',n],['comments',n],[e,'customer']]:[],a=c?[[t,'customer_login'],[t,'recover_customer_password'],[t,'create_customer']]:[],m=o([...r,...a]),i=o(r.slice(0,3)),u=e=>()=>e?[...document.querySelectorAll(e)].map((e=>e.form)):[];return[u(m),u(i)]}(!0,!0),p=e=>{const t=e.target,n=t instanceof HTMLFormElement?t:t&&t.form;return n&&d().find((e=>n===e))};a.addEventListener('submit',(e=>{p(e)&&e.preventDefault()}));for(const e of['focusin','change'])a.addEventListener(e,(e=>{const t=p(e);t&&!t.dataset[r]&&(i(t,l().some((e=>e===t))),t.dataset[r]=!0)}));const _=m.get('form_key'),v=m.get(s);_&&v&&a.addEventListener('DOMContentLoaded',(()=>{for(const e of l())e.elements[s].value===v&&c(e,_)}))}(m,new URLSearchParams(a.location.search),((e,t)=>{const n=a[i][u],o=n.bindForm,c='6LeHG2ApAAAAAO4rPaDW-qVpPKPOBfjbCpzJB9ey';if(o)return o(e,c,t);n.q.push([e,c,t]),m.body.append(Object.assign(m.createElement('script'),{async:!0,src:'https://cdn.shopify.com/shopifycloud/storefront-forms-hcaptcha/ce_storefront_forms_captcha_recaptcha.v1.0.5.iife.js'}))}))}();   
}
   
{

    (function(){if ("sendBeacon" in navigator && "performance" in window) {var session_token = document.cookie.match(/_shopify_s=([^;]*)/);function handle_abandonment_event(e) {var entries = performance.getEntries().filter(function(entry) {return /monorail-edge.shopifysvc.com/.test(entry.name);});if (!window.abandonment_tracked && entries.length === 0) {window.abandonment_tracked = true;var currentMs = Date.now();var navigation_start = performance.timing.navigationStart;var payload = {shop_id: 52485554369,url: window.location.href,navigation_start,duration: currentMs - navigation_start,session_token: session_token && session_token.length === 2 ? session_token[1] : "",page_type: "index"};window.navigator.sendBeacon("https://monorail-edge.shopifysvc.com/v1/produce", JSON.stringify({schema_id: "online_store_buyer_site_abandonment/1.1",payload: payload,metadata: {event_created_at_ms: currentMs,event_sent_at_ms: currentMs}}));}}window.addEventListener('pagehide', handle_abandonment_event);}}());
}

{
    window.ShopifyAnalytics.merchantGoogleAnalytics = function() {
    };
}

{
    (function () {
        var customDocumentWrite = function(content) {
          var jquery = null;
    
          if (window.jQuery) {
            jquery = window.jQuery;
          } else if (window.Checkout && window.Checkout.$) {
            jquery = window.Checkout.$;
          }
    
          if (jquery) {
            jquery('body').append(content);
          }
        };
    
        var hasLoggedConversion = function(token) {
          if (token) {
            return document.cookie.indexOf('loggedConversion=' + token) !== -1;
          }
          return false;
        }
    
        var setCookieIfConversion = function(token) {
          if (token) {
            var twoMonthsFromNow = new Date(Date.now());
            twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);
    
            document.cookie = 'loggedConversion=' + token + '; expires=' + twoMonthsFromNow;
          }
        }
    
        var trekkie = window.ShopifyAnalytics.lib = window.trekkie = window.trekkie || [];
        if (trekkie.integrations) {
          return;
        }
        trekkie.methods = [
          'identify',
          'page',
          'ready',
          'track',
          'trackForm',
          'trackLink'
        ];
        trekkie.factory = function(method) {
          return function() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(method);
            trekkie.push(args);
            return trekkie;
          };
        };
        for (var i = 0; i < trekkie.methods.length; i++) {
          var key = trekkie.methods[i];
          trekkie[key] = trekkie.factory(key);
        }
        trekkie.load = function(config) {
          trekkie.config = config || {};
          trekkie.config.initialDocumentCookie = document.cookie;
          var first = document.getElementsByTagName('script')[0];
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.onerror = function(e) {
            var scriptFallback = document.createElement('script');
            scriptFallback.type = 'text/javascript';
            scriptFallback.onerror = function(error) {
                    var Monorail = {
          produce: function produce(monorailDomain, schemaId, payload) {
            var currentMs = new Date().getTime();
            var event = {
              schema_id: schemaId,
              payload: payload,
              metadata: {
                event_created_at_ms: currentMs,
                event_sent_at_ms: currentMs
              }
            };
            return Monorail.sendRequest("https://" + monorailDomain + "/v1/produce", JSON.stringify(event));
          },
          sendRequest: function sendRequest(endpointUrl, payload) {
            // Try the sendBeacon API
            if (window && window.navigator && typeof window.navigator.sendBeacon === 'function' && typeof window.Blob === 'function' && !Monorail.isIos12()) {
              var blobData = new window.Blob([payload], {
                type: 'text/plain'
              });
    
              if (window.navigator.sendBeacon(endpointUrl, blobData)) {
                return true;
              } // sendBeacon was not successful
    
            } // XHR beacon
    
            var xhr = new XMLHttpRequest();
    
            try {
              xhr.open('POST', endpointUrl);
              xhr.setRequestHeader('Content-Type', 'text/plain');
              xhr.send(payload);
            } catch (e) {
              console.log(e);
            }
    
            return false;
          },
          isIos12: function isIos12() {
            return window.navigator.userAgent.lastIndexOf('iPhone; CPU iPhone OS 12_') !== -1 || window.navigator.userAgent.lastIndexOf('iPad; CPU OS 12_') !== -1;
          }
        };
        Monorail.produce('monorail-edge.shopifysvc.com',
          'trekkie_storefront_load_errors/1.1',
          {shop_id: 52485554369,
          theme_id: 131518890177,
          app_name: "storefront",
          context_url: window.location.href,
          source_url: "//hongotheme.myshopify.com/cdn/s/trekkie.storefront.dd626a6a6fbdab104f8779acc4331c330134c832.min.js"});
    
            };
            scriptFallback.async = true;
            scriptFallback.src = '//hongotheme.myshopify.com/cdn/s/trekkie.storefront.dd626a6a6fbdab104f8779acc4331c330134c832.min.js';
            first.parentNode.insertBefore(scriptFallback, first);
          };
          script.async = true;
          script.src = '//hongotheme.myshopify.com/cdn/s/trekkie.storefront.dd626a6a6fbdab104f8779acc4331c330134c832.min.js';
          first.parentNode.insertBefore(script, first);
        };
        trekkie.load(
          {"Trekkie":{"appName":"storefront","development":false,"defaultAttributes":{"shopId":52485554369,"isMerchantRequest":null,"themeId":131518890177,"themeCityHash":"6635387522767830883","contentLanguage":"en","currency":"USD"},"isServerSideCookieWritingEnabled":true,"monorailRegion":"shop_domain","enabledBetaFlags":["bbcf04e6"]},"Google Gtag Pixel":{"conversionId":"G-GFWMVLRW7P","eventLabels":[{"type":"purchase","action_label":"G-GFWMVLRW7P"},{"type":"page_view","action_label":"G-GFWMVLRW7P"},{"type":"view_item","action_label":"G-GFWMVLRW7P"},{"type":"search","action_label":"G-GFWMVLRW7P"},{"type":"add_to_cart","action_label":"G-GFWMVLRW7P"},{"type":"begin_checkout","action_label":"G-GFWMVLRW7P"},{"type":"add_payment_info","action_label":"G-GFWMVLRW7P"}],"targetCountry":"US"},"Session Attribution":{},"S2S":{"facebookCapiEnabled":false,"source":"trekkie-storefront-renderer"}}
        );
    
        var loaded = false;
        trekkie.ready(function() {
          if (loaded) return;
          loaded = true;
    
          window.ShopifyAnalytics.lib = window.trekkie;
    
      
          var originalDocumentWrite = document.write;
          document.write = customDocumentWrite;
          try { window.ShopifyAnalytics.merchantGoogleAnalytics.call(this); } catch(error) {};
          document.write = originalDocumentWrite;
    
          window.ShopifyAnalytics.lib.page(null,{"pageType":"home"});
    
          var match = window.location.pathname.match(/checkouts\/(.+)\/(thank_you|post_purchase)/)
          var token = match? match[1]: undefined;
          if (!hasLoggedConversion(token)) {
            setCookieIfConversion(token);
            
          }
        });
    
    
            var eventsListenerScript = document.createElement('script');
            eventsListenerScript.async = true;
            eventsListenerScript.src = "//hongotheme.myshopify.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js";
            document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);
    
    })();
}


{

    (function () {
        if (window.BOOMR && (window.BOOMR.version || window.BOOMR.snippetExecuted)) {
          return;
        }
        window.BOOMR = window.BOOMR || {};
        window.BOOMR.snippetStart = new Date().getTime();
        window.BOOMR.snippetExecuted = true;
        window.BOOMR.snippetVersion = 12;
        window.BOOMR.application = "storefront-renderer";
        window.BOOMR.themeName = "Hongo";
        window.BOOMR.themeVersion = "1.7";
        window.BOOMR.shopId = 52485554369;
        window.BOOMR.themeId = 131518890177;
        window.BOOMR.renderRegion = "gcp-us-central1";
        window.BOOMR.url =
          "https://hongotheme.myshopify.com/cdn/shopifycloud/boomerang/shopify-boomerang-1.0.0.min.js";
        var where = document.currentScript || document.getElementsByTagName("script")[0];
        var parentNode = where.parentNode;
        var promoted = false;
        var LOADER_TIMEOUT = 3000;
        function promote() {
          if (promoted) {
            return;
          }
          var script = document.createElement("script");
          script.id = "boomr-scr-as";
          script.src = window.BOOMR.url;
          script.async = true;
          parentNode.appendChild(script);
          promoted = true;
        }
        function iframeLoader(wasFallback) {
          promoted = true;
          var dom, bootstrap, iframe, iframeStyle;
          var doc = document;
          var win = window;
          window.BOOMR.snippetMethod = wasFallback ? "if" : "i";
          bootstrap = function(parent, scriptId) {
            var script = doc.createElement("script");
            script.id = scriptId || "boomr-if-as";
            script.src = window.BOOMR.url;
            BOOMR_lstart = new Date().getTime();
            parent = parent || doc.body;
            parent.appendChild(script);
          };
          if (!window.addEventListener && window.attachEvent && navigator.userAgent.match(/MSIE [67]./)) {
            window.BOOMR.snippetMethod = "s";
            bootstrap(parentNode, "boomr-async");
            return;
          }
          iframe = document.createElement("IFRAME");
          iframe.src = "about:blank";
          iframe.title = "";
          iframe.role = "presentation";
          iframe.loading = "eager";
          iframeStyle = (iframe.frameElement || iframe).style;
          iframeStyle.width = 0;
          iframeStyle.height = 0;
          iframeStyle.border = 0;
          iframeStyle.display = "none";
          parentNode.appendChild(iframe);
          try {
            win = iframe.contentWindow;
            doc = win.document.open();
          } catch (e) {
            dom = document.domain;
            iframe.src = "javascript:var d=document.open();d.domain='" + dom + "';void(0);";
            win = iframe.contentWindow;
            doc = win.document.open();
          }
          if (dom) {
            doc._boomrl = function() {
              this.domain = dom;
              bootstrap();
            };
            doc.write("<body onload='document._boomrl();'>");
          } else {
            win._boomrl = function() {
              bootstrap();
            };
            if (win.addEventListener) {
              win.addEventListener("load", win._boomrl, false);
            } else if (win.attachEvent) {
              win.attachEvent("onload", win._boomrl);
            }
          }
          doc.close();
        }
        var link = document.createElement("link");
        if (link.relList &&
          typeof link.relList.supports === "function" &&
          link.relList.supports("preload") &&
          ("as" in link)) {
          window.BOOMR.snippetMethod = "p";
          link.href = window.BOOMR.url;
          link.rel = "preload";
          link.as = "script";
          link.addEventListener("load", promote);
          link.addEventListener("error", function() {
            iframeLoader(true);
          });
          setTimeout(function() {
            if (!promoted) {
              iframeLoader(true);
            }
          }, LOADER_TIMEOUT);
          BOOMR_lstart = new Date().getTime();
          parentNode.appendChild(link);
        } else {
          iframeLoader(false);
        }
        function boomerangSaveLoadTime(e) {
          window.BOOMR_onload = (e && e.timeStamp) || new Date().getTime();
        }
        if (window.addEventListener) {
          window.addEventListener("load", boomerangSaveLoadTime, false);
        } else if (window.attachEvent) {
          window.attachEvent("onload", boomerangSaveLoadTime);
        }
        if (document.addEventListener) {
          document.addEventListener("onBoomerangLoaded", function(e) {
            e.detail.BOOMR.init({
              ResourceTiming: {
                enabled: true,
                trackedResourceTypes: ["script", "img", "css"]
              },
            });
            e.detail.BOOMR.t_end = new Date().getTime();
          });
        } else if (document.attachEvent) {
          document.attachEvent("onpropertychange", function(e) {
            if (!e) e=event;
            if (e.propertyName === "onBoomerangLoaded") {
              e.detail.BOOMR.init({
                ResourceTiming: {
                  enabled: true,
                  trackedResourceTypes: ["script", "img", "css"]
                },
              });
              e.detail.BOOMR.t_end = new Date().getTime();
            }
          });
        }
      })();
}


{
  window.money_format = '${{amount}}';
  window.routes = {
    shop_url: 'https://hongotheme.myshopify.com',
    root_url: '/',
    cart_url: '/cart',
    cart_add_url: '/cart/add',
    cart_change_url: '/cart/change',
    cart_update_url: '/cart/update'
  }
  window.cartStrings = {
    error: `There was an error while updating your cart. Please try again.`,
    quantityError: `You can only add [quantity] of this item to your cart.`
  }
  window.variantStrings = {
    addToCart: `<i class="feather-shopping-bag"></i><span>Add to cart</span>`,
    preOrder: `<i class="feather-shopping-bag"></i><span>Pre-Order</span>`,
    addingToCart: 'Adding...',
    soldOut: `Sold out`,
    unavailable: `Unavailable`,
  }
  window.wishlistStrings = {
    add: `Add to wishlist`,
    remove: `Remove from wishlist`
  }
  window.variantOptionsImage = { "Silk":"\/\/hongotheme.myshopify.com\/cdn\/shop\/files\/demo-fashion-manu-collection-03.png?v=1675347150","Cotton":"\/\/hongotheme.myshopify.com\/cdn\/shop\/files\/cotton-icon.jpg?v=1660279624","Denim":"\/\/hongotheme.myshopify.com\/cdn\/shop\/files\/image.jpg?v=1660279625", };
  window.GOOGLE_MAP_API_KEY = 'AIzaSyBcJc_X-cmVa1QEWsOrhWag9PRHIQPj91g';
  window.freeShippingConfig = {
    'enable': 1,
    'goal_amt': "500",
    'goal_amt_msg_1': "Spend <span>{{amount}}</span> more to enjoy <span>FREE Shipping</span>",
    'goal_amt_msg_2': "Congratulations! You are eligible for <span>FREE Shipping.</span>",
    'cart_total': "0",
    'template': "index"
  }
}

{
  window.Hongo = {
    shop: 'hongotheme.myshopify.com',
    design_mode: false,}
}


{
  document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('.collection-title');
  
    // Add event listener to each tab button
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        this.classList.add('active');
  
        // Get the collection name from data attribute
        const collection = this.getAttribute('data-collection');
  
        // Hide all collections
        const collections = document.querySelectorAll('.product-box');
        collections.forEach(col => col.style.display = 'none');
  
        // Show the selected collection
        const selectedCollection = document.querySelector(`.product-box[data-collection="${collection}"]`);
        if (selectedCollection) {
          selectedCollection.style.display = 'block';
        }
      });
    });
  });
}

{
  document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const target = document.querySelector(this.getAttribute('data-bs-target'));

            // Remove active class from all buttons and tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('show', 'active'));

            // Add active class to the clicked button and corresponding tab
            this.classList.add('active');
            target.classList.add('show', 'active');
        });
    });
});

}

{
  document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbar = document.querySelector(".navbar");
    const menuOverlay = document.querySelector(".menu-overlay");

    navbarToggler.addEventListener("click", function() {
        // Only apply for responsive mode
        if (window.innerWidth <= 991) {
            navbar.classList.toggle("show");
            menuOverlay.classList.toggle("show");
        }
    });

    menuOverlay.addEventListener("click", function() {
        navbar.classList.remove("show");
        menuOverlay.classList.remove("show");
    });

    // Add event listener to window resize to close the menu if screen size changes
    window.addEventListener("resize", function() {
        if (window.innerWidth > 991) {
            navbar.classList.remove("show");
            menuOverlay.classList.remove("show");
        }
    });
});
}

{
  
}










