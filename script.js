const campo = document.querySelector('form');

campo.addEventListener('submit', (e) => {
    e.preventDefault();
})

campo.addEventListener('submit', () => {
    const inputs = querySelector(.inputs)
    let numeroA = document.querySelector('#campoA').value;
    let numeroB = document.querySelector('#campoB').value;

    if (numeroA < numeroB) {
        inputs.classList.add('correto')
    }
    else {
        inputs.classList.add('incorreto')
    }
})

