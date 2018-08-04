(function openMenu() {
    var menuIcon = document.querySelector('#menu-icon');
    var menuClose = document.querySelector('#menu-close');
    var menu = document.querySelector('#menu');

    menuIcon.addEventListener('click', function(e) {
        menu.classList.toggle('menu_open');
        menuIcon.classList.toggle('menu-icon_open');
        menuClose.classList.toggle('menu-close_open');
        e.stopPropagation();
    });

    menuClose.addEventListener('click', function(e) {
        menu.classList.toggle('menu_open');
        menuIcon.classList.toggle('menu-icon_open');
        menuClose.classList.toggle('menu-close_open');
        e.stopPropagation();
    });

    window.addEventListener('click', function() {
        menu.classList.remove('menu_open');
        menuIcon.classList.remove('menu-icon_open');
        menuClose.classList.remove('menu-close_open');
    });

    menu.addEventListener('click', function(e) {
        if (e.target.tagName != 'A') {
            e.stopPropagation();
        }
    });
})();