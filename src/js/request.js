    // api
    const API = 'https://randomuser.me/api/?results=100'
    // for leader
    const overlay = document.getElementById('overlay')
    // for error 
    const Err = document.querySelector('.error')
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    // For add data
    const user = document.querySelector('#user')

    const GetData  = async (API )=>{
        overlay.classList.remove('hidden')
        await fetch(API)
        .then( response=> response.json() )
        .then((data)=> {
            load(data)
        })
        .catch(()=>{
                Err.classList.remove('hidden')
                main.classList.add('hidden')
                footer.classList.add('hidden')
        })
        overlay.classList.add('hidden')
    }
GetData(API)
function load(data) {    
    data.results.forEach(element => {
    user.innerHTML+=`
    <li class="user__item">
        </button>
        <img class="user__img" alt="User photo" src="${element.picture.medium}" width="100" height="100"/>
        <div class="user__name">
            <span class="material-symbols-outlined">badge</span>
            <span class="user-name" >-${element.name.title} ${element.name.first} ${element.name.last}</span>
        </div>
        <div class="user__year">
            <span class="material-symbols-outlined">cake</span>
            <span>-${element.dob.age} years old.</span>
        </div>
        <div class="user__location">
            <span class="material-symbols-outlined">person_pin_circle</span>
            <span>-${element.location.city}</span>
            <span-${element.location.country}</span>
        </div>
        <div class="user__gender">
            <span class="material-symbols-outlined">man</span>
            <span>- ${element.gender}</span>
        </div>
        <div class="user__email">
            <span class="material-symbols-outlined">email</span>
            <span>  ${element.email}</span>
        </div>
        <div class="user__email">
            <span class="material-symbols-outlined">phone</span>
            <span>${element.phone}</span>
        </div>
    </li>`
});
}