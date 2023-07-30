window.addEventListener('resize', () => {
    let largura = window.innerWidth;
    if(largura > 761){
        document.querySelector('#nav-menu').classList.remove('menu-mobile-aberto');
        document.querySelector('#nav-menu').classList.remove('menu-mobile-fechado');
    }

    if(largura <= 761){
        if(
            !document.querySelector('#nav-menu').classList.contains('menu-mobile-aberto')
            &&
            !document.querySelector('#nav-menu').classList.contains('menu-mobile-fechado')
        ){
            document.querySelector('#nav-menu').classList.add('menu-mobile-fechado');
        }
    }
});

document.querySelector('#close-menu-mobile').addEventListener('click', () => {
    document.querySelector('#nav-menu').classList.remove('menu-mobile-aberto');
    document.querySelector('#nav-menu').classList.add('menu-mobile-fechado');
});

document.querySelector('#open-menu-mobile').addEventListener('click', () => {
    document.querySelector('#nav-menu').classList.remove('menu-mobile-fechado');
    document.querySelector('#nav-menu').classList.add('menu-mobile-aberto');
});

let linksMenu = document.querySelectorAll('.link-menu-mobile');
for (let i = 0; i < linksMenu.length; i++){
    linksMenu[i].addEventListener('click', () => {
        if(document.querySelector('#nav-menu').classList.contains('menu-mobile-aberto')){
            document.querySelector('#nav-menu').classList.remove('menu-mobile-aberto');
            document.querySelector('#nav-menu').classList.add('menu-mobile-fechado');
        }
    });
}
