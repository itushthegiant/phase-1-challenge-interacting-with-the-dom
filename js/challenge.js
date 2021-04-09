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
        let li;
        if (document.querySelector(`[data-num='${counter.innerText}']`)) {
            li = document.querySelector(`[data-num='${counter.innerText}']`)
            li.innerText = `${counter.innerText} have ${li.dataset.count++} likes!`
        } else {
            li = document.createElement('li');
            ul.appendChild(li);
            li.setAttribute("data-num", counter.innerText);
            li.setAttribute("data-count", 1)
            li.innerText = `${counter.innerText} have 1 likes!`;
        }
    })


////// "pause" button //////    
    const pause = document.getElementById('pause');
    pause.addEventListener('click', () => {
        if (pause.innerText === "pause") {
            like.disabled = true;
            minus.disabled = true;
            plus.disabled = true;
            clearInterval(startTime);
            pause.innerText = "resume";
        } else {
            like.disabled = false;
            minus.disabled = false;
            plus.disabled = false;
            pause.innerText = "pause";
            setInterval(function() {
               counter.innerText++
            }, 1000) 
        }
    })


////// "comments" //////
    const list = document.getElementById('list');
    const form = document.getElementById("comment-form");
    const input = document.getElementById("comment-input");
    const comment = input.value;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const uList = document.createElement('ul');
        const li = document.createElement('li');
        list.appendChild(uList);
        li.appendChild(document.createTextNode(comment));
        list.appendChild(li);
    })






})

    