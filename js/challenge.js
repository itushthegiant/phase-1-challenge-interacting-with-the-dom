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
    let numOfLikes = 1
    like.addEventListener('click', () => {
        let li;
        if (document.querySelector(`[data-num='${counter.innerText}']`)) {
            li = document.querySelector(`[data-num='${counter.innerText}']`)
            li.innerText = `${counter.innerText} have ${numOfLikes++} likes!`
        } else {
            li = document.createElement('li');
            ul.appendChild(li);
            li.setAttribute("data-num", counter.innerText);
            li.innerText = `${counter.innerText} have 1 likes!`;
        }
    })









})

    