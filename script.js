const input = document.querySelector('input');
const div = document.querySelector('div');

const passwords = ['usER', 'paSswOrd', 'AnytHing'];
const messages = ['test message', 'working', 'error'];


const showMessage = (event) => {
    let text = event.target.value.toLowerCase();
    div.textContent = ''

    passwords.forEach((password, i) => {
        if (text === password.toLowerCase()) {
            div.textContent = messages[i]
        }
    });
};

input.addEventListener('input', showMessage)