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
    const obj = {}
    like.addEventListener('click', () => {
        if (obj.hasOwnProperty(counter.innerText)) {

        } else {
            const li = document.createElement('li');
            ul.appendChild(li);
            obj[counter.innerText] = 1;
            li.setAttribute("id", "like-number");
            li.innerText = `${counter.innerText} have 1 likes!`;
        }
    })









})

    