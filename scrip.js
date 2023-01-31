const getBody = document.querySelector('body');

const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');

item1.addEventListener('mouseenter', () => {

    getBody.style.background = "rgb(255, 87, 87)";
    getBody.style.transition = "0.4s"

});

item2.addEventListener('mouseenter', () => {

    getBody.style.background = "rgb(101, 91, 255)";
    getBody.style.transition = "0.4s"

});

item3.addEventListener('mouseenter', () => {

    getBody.style.background = "rgb(134, 255, 78)";
    getBody.style.transition = "0.4s"

});

document.addEventListener('mouseout', () => {

    getBody.style.background = "rgb(49, 196, 196)";
    getBody.style.transition = "0.4s"
});