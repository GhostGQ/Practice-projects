const panels = document.querySelectorAll('.panel')

panels.forEach((panel) =>{
    panel.addEventListener('click', () =>{
        removeAvtiveClasses()
        panel.classList.add('active');
    })
})

const removeAvtiveClasses = ()=> {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}