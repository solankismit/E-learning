// let btn = document.getElementById('tap-btn')
var acc = document.querySelectorAll(".faq__content-item");
acc = [...acc];
console.log(acc[0])
var i;
console.log("FAQ JS")

acc.map(
    (ele) => {
        var btn = ele.querySelector('#tap-btn')
        btn.onclick = () => {

            var changeIcon = ele.querySelector('.faq__content-item--question--icon')
            changeIcon.classList.toggle('closed')

            var showDetails = ele.querySelector('.faq__content-item--answer')
            showDetails.classList.toggle('hidden')

            ele.classList.toggle('closed');
        }
    }
)