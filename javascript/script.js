/* Here we will write our Javascript code */
// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    console.log(top);
    if(top >=800) {
        header.classList.add('bg-dark');
    }
    else {
        header.classList.remove('bg-dark');
    }
}
