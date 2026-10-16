function dark() {
    //header
    let body = document.querySelector('body');
    let nav_title = document.querySelector('.nav-title');
    let nav_ul_li1 = document.querySelector('.nav-ul-li1');
    let nav_ul_li2 = document.querySelector('.nav-ul-li2');
    let nav_ul_li3 = document.querySelector('.nav-ul-li3');
    let nav_btn_light = document.querySelector('.nav-btn-1');
    let nav_btn_dark = document.querySelector('.nav-btn-2');
    //main
    let section_1_title = document.querySelector('.section-1-title')
    let section_1_text = document.querySelector('.section-1-text')
    let section_1_btn = document.querySelector('.section-1-btn')

    body.style.backgroundColor = '#000000'
    //header
    nav_title.style.color = 'white';
    nav_ul_li1.style.color = 'white';
    nav_ul_li2.style.color = 'white';
    nav_ul_li3.style.color = 'white';
    nav_btn_light.style.backgroundColor = 'white';
    nav_btn_light.style.color = 'gray';
    nav_btn_dark.style.backgroundColor = 'gray';
    nav_btn_dark.style.color = 'white';
    //main
    section_1_title.style.color = 'white';
    section_1_text.style.color = 'white';
    section_1_btn.style.color = 'gray';
    section_1_btn.style.backgroundColor = 'white';
    section_1_btn.style.fontWeight = '900';
}