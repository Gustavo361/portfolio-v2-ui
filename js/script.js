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

fetch('http://localhost:3000')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    fetch('http://localhost:3000/enviar-email', {
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
                // Se o envio for bem-sucedido, redirecione para a página de agradecimento
                window.location.href = 'thank-you.html';
            } else {
                window.alert('erro tente novamente')
                // Adicione lógica para lidar com falha no envio, se necessário
            }
        })
        .catch(error => console.error('Error:', error));
})