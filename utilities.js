let circleElement = document.querySelectorAll(".circle")
let descInfoElement1 = document.querySelector(".desc-info-1")
let descInfoElement2 = document.querySelector(".desc-info-2")
let descInfoElement3 = document.querySelector(".desc-info-3")




circleElement[0].addEventListener('mouseenter', (event) => {
    descInfoElement1.classList.toggle('display-none');
});

circleElement[0].addEventListener('mouseleave', (event) => {
    descInfoElement1.classList.toggle('display-none');
});


circleElement[1].addEventListener('mouseenter', (event) => {
    descInfoElement2.classList.toggle('display-none');
});

circleElement[1].addEventListener('mouseleave', (event) => {
    descInfoElement2.classList.toggle('display-none');
});

circleElement[2].addEventListener('mouseenter', (event) => {
    descInfoElement3.classList.toggle('display-none');
});

circleElement[2].addEventListener('mouseleave', (event) => {
    descInfoElement3.classList.toggle('display-none');
});

