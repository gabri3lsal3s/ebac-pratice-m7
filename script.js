const campo = document.querySelector('form');
let formValido = false;

addEventListener('submit', (e) => {
    e.preventDefault();
})

campo.addEventListener('submit', () => {
    const mensagem = document.querySelector('#mensagem')
    let numeroA = document.querySelector('#campoA').value;
    let numeroB = document.querySelector('#campoB').value;

    if (numeroA > numeroB) {
        mensagem.innerText = (`Válido! ${numeroA} é maior que ${numeroB}`)
        mensagem.classList.add('valido')
        mensagem.style.visibility = 'visible'
    }
    else if (numeroA <= numeroB) {
        mensagem.innerText = (`O número ${numeroA} não é maior que ${numeroB}`)
        mensagem.classList.add('invalido')
        mensagem.style.visibility = 'visible'
    }

    campo.addEventListener('change', () => {
        mensagem.style.visibility = 'hidden'
        mensagem.classList.remove('invalido')
        mensagem.classList.remove('valido')
    })
})

// O código está com um bug na comparação das potências de 10

