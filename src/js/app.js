    const form = document.getElementById('form')
    const formButton = document.getElementById('form__button')
    const deleteBtn = document.getElementById('delete__btn')
    const clearBtn = document.getElementById('clear__button')

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        if (e.submitter.classList = 'clear__button form__button') {
        const user = document.querySelector('#user')
            document.removeChild(user)
        }
    })
const nav = document.querySelector('.nav')
const nav_btn = document.querySelector('.nav-btn')
nav_btn.addEventListener('click',()=>{
    nav_btn.classList.add('hidden')
    nav.style.display='block'
})