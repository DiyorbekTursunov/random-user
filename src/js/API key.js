const code_result = document.querySelector('.code-result-title')
const code_result_2 = document.querySelector('.code-result-title_2')
const type_language_code = document.querySelector('.type-language-code')
const Java_script = `<span class='color-b'>const</span> <span class='color-danger'>API</span> = 'https://randomuser.me/api/?results=10'`

const python = `<span class='color-b'>import</span> request <br/> <span class='color-danger'>data</span> = request.get('https://randomuser.me/api/?results=10') <br/> <span class='color-b'>print</span>(data.status_code ) <span class='text-dark'>//for example</span>`

const java = `java`
function CreadFile(fileName , iconName) {
    document.querySelector('#fileTitle').innerHTML= fileName
    document.querySelector('.icon').setAttribute('src' , iconName)
    document.querySelector('.icon').classList.remove('hidden')
}


const code_form = document.querySelector('#code-form')
code_form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log();
    setTimeout(() => {
        switch (e.submitter.className) {
            case 'Java_script':
                code_result.innerHTML = Java_script
                CreadFile('request.js' , "../src/images/png/js.png")
                break;
                    case 'Python':
                        code_result.innerHTML = python
                        CreadFile('request.py' , "../src/images/svg/python-seeklogo.com.svg")
                        break;
                            case 'java':
                            CreadFile('request.java',"..//src/images/svg/java-seeklogo.com.svg")
                            code_result.innerHTML = java
        }

    }, 1000);
    
})
