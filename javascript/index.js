function abrir_fechar_menu() {
    var menu = document.getElementById('links_header');

    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
};
/*function fechar_menu() {
    var menu = document.getElementById('links_header');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } 
};*/