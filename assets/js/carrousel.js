// CARROUSEL - NEWS

let image = document.querySelector('.s1');
let radio1 = document.querySelector('#radio1');
let radio2 = document.querySelector('#radio2');
let radio3 = document.querySelector('#radio3');
let radio4 = document.querySelector('#radio4');
let radio5 = document.querySelector('#radio5');
let radio6 = document.querySelector('#radio6');

function move () {
    if (radio1.checked) {
        image.style.marginLeft = '0%';
    } else if (radio2.checked) {
        image.style.marginLeft = '-17.3%';
    } else if (radio3.checked) {
        image.style.marginLeft = '-34.3%';
    } else if (radio4.checked) {
        image.style.marginLeft = '-51.3%';
    } else if (radio5.checked) {
        image.style.marginLeft = '-68.3%';
    } else if (radio6.checked) {
        image.style.marginLeft = '-85.3%';
    }
}
