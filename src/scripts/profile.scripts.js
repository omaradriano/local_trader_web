const nav_1 = document.getElementById('nav_1')
const nav_2 = document.getElementById('nav_2')
const nav_3 = document.getElementById('nav_3')
const profileCardBody = document.getElementById('profileCardBody')

// window.onload = () => {
//     nav_1.classList.add('active')
// }

nav_1.addEventListener('click', () => {
    nav_1.classList.add('active')
    nav_2.classList.remove('active')
    nav_3.classList.remove('active')
    // req.session.activeWin = 'nav_1'
})
nav_2.addEventListener('click', () => {
    nav_1.classList.remove('active')
    nav_2.classList.add('active')
    nav_3.classList.remove('active')
    // req.session.activeWin = 'nav_2'

    // profileCardBody.innerHTML = `pvtos`
})
nav_3.addEventListener('click', () => {
    nav_1.classList.remove('active')
    nav_2.classList.remove('active')
    nav_3.classList.add('active')
    // req.session.activeWin = 'nav_3'
})
