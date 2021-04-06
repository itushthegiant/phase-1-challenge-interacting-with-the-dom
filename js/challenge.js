document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    let startTime = setInterval(function() {
       counter.innerText++
    }, 1000) 

    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    minus.addEventListener('click', () => {
        counter.innerText--
    })
    
    plus.addEventListener('click', () => {
        counter.innerText++
    })

})

    