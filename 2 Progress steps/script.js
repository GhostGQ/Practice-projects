const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currenActive = 1

const update = () =>{
    circles.forEach((circle, idx) =>{
        if (idx < currenActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 3) / (circles.length - 1) * 100 + '%' )

    if (currenActive === 1) {
        prev.disabled = true
    } else if (currenActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

next.addEventListener('click', () =>{
    currenActive++
    
    if (currenActive > circles.length) {
        currenActive = circles.length
    }
    
    update()
}) 

prev.addEventListener('click', () =>{
    currenActive--
    
    if (currenActive < 1) {
        currenActive = 1
    }

    update()
}) 


