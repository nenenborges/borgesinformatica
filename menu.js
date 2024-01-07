function menuShow(){
    let listamenu = document.querySelector('.lista');
    if (listamenu.classList.contains('open')){
        listamenu.classList.remove('open');
        document.querySelector('.menu');
    }else{
        listamenu.classList.add('open');
    }
}

