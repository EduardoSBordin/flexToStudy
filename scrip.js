const getBody = document.querySelector('body');

const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');

const infTest = document.querySelector('#infTest');

const arr = ['Green', 'Purple', 'Red'];

item1.addEventListener('mouseenter', () => {

    getBody.style.background = "rgb(255, 87, 87)";
    getBody.style.transition = "0.4s"

    const createH1 = document.createElement('h1');
    createH1.innerHTML = arr[2];
    infTest.appendChild(createH1);
});

item2.addEventListener('mouseenter', () => {

    getBody.style.background = "rgb(101, 91, 255)";
    getBody.style.transition = "0.4s"

    const createH1 = document.createElement('h1');
    createH1.innerHTML = arr[1];
    infTest.appendChild(createH1);

});

item3.addEventListener('mouseenter', () => {

    getBody.style.background = "rgb(134, 255, 78)";
    getBody.style.transition = "0.4s"

    const createH1 = document.createElement('h1');
    createH1.innerHTML = arr[0];
    infTest.appendChild(createH1);

});

document.addEventListener('mouseout', () => {

    getBody.style.background = "rgb(49, 196, 196)";
    getBody.style.transition = "0.4s"

    infTest.innerHTML = '';
});