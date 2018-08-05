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

(function openLogin() {
    var loginIcon = document.querySelector('#login-icon');
    var login = document.querySelector('#login__content');

    loginIcon.addEventListener('click', function(e) {
        login.classList.toggle('login__content_open');
        loginIcon.classList.toggle('login-icon_open');
        e.stopPropagation();
    });

    window.addEventListener('click', function() {
        login.classList.remove('login__content_open');
        loginIcon.classList.remove('login-icon_open');
    });

    login.addEventListener('click', function(e) {
        if (e.target.tagName != 'A') {
            e.stopPropagation();
        }
    });
})();