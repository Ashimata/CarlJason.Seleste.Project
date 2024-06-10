{
    window.addEventListener('scroll', function() {
        const headerSection = document.querySelector('.header');
        const headerList = document.querySelector('.header ul');
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