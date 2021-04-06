document.addEventListener('DOMContentLoaded', () => {
////// "counter" //////
    const counter = document.getElementById('counter');
    let startTime = setInterval(function() {
       counter.innerText++
    }, 1000) 

///// "minus" and "plus" buttons //////
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    minus.addEventListener('click', () => {
        counter.innerText--
    })
    plus.addEventListener('click', () => {
        counter.innerText++
    })

////// "like" button //////
    const like = document.getElementById('heart');
    const ul = document.querySelector(".likes");
    like.addEventListener('click', () => {
        const li = document.createElement('li');
        ul.appendChild(li);
        let clicks = 1;
        let onClick = function () {
            clicks += 1;
            like.innerHTML = clicks;
        };
        li.innerText = `${counter.innerText} have ${clicks} likes!`;
    })









})

    