const dataMenuOpenBtn = document.querySelector('[data-menu-open-btn]')
const dataMenuCloseBtn = document.querySelector('[data-menu-close-btn]')
const menuFullScreen = document.querySelector('[data-menu-full-screen]')

const dataMenuMobileProjs = document.querySelector('[data-menu-mobile-projs]')
const dataMenuMobileAbout = document.querySelector('[data-menu-mobile-about]')
const dataMenuMobileContact = document.querySelector('[data-menu-mobile-contact]')

const contactForm = document.getElementById('contactForm')

dataMenuOpenBtn.addEventListener('click', () => {
    dataMenuOpenBtn.classList.remove('active')
    dataMenuCloseBtn.classList.add('active')

    menuFullScreen.classList.add('active')
})

dataMenuCloseBtn.addEventListener('click', () => {
    dataMenuOpenBtn.classList.add('active')
    dataMenuCloseBtn.classList.remove('active')

    menuFullScreen.classList.remove('active')
})

function closeMenuFullScreen() {
    menuFullScreen.classList.remove('active')
}

dataMenuMobileProjs.addEventListener('click', () => {
    closeMenuFullScreen()
})

dataMenuMobileAbout.addEventListener('click', () => {
    closeMenuFullScreen()
})

dataMenuMobileContact.addEventListener('click', () => {
    closeMenuFullScreen()
})

fetch('https://portfolio-v2-server.onrender.com/')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    fetch('https://portfolio-v2-server.onrender.com/enviar-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: document.getElementById('userName').value,
            userEmail: document.getElementById('userEmail').value,
            userMessage: document.getElementById('userMessage').value,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                window.location.href = 'thank-you.html';
            } else {
                window.alert('Erro. Tente novamente')
            }
        })
        .catch(error => console.error('Error:', error));
})