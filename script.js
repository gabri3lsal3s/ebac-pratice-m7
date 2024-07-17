const campo_menor = document.querySelector('.menor');

campo_menor.addEventListener('change', () => {
        const campo_resposta = document.querySelector('.menor .resposta');
        let numeroA = document.querySelector('#campoA1').value;
        let numeroB = document.querySelector('#campoB1').value;

        if (numeroA && numeroB != '') {
            campo_resposta.style.display = 'block'
        }
        else {
            campo_resposta.style.display = 'none'
        }

        if(numeroA < numeroB) {
            campo_resposta.textContent = `${numeroA} é menor que ${numeroB}`;
        }
        else if (numeroA > numeroB) {
            campo_resposta.textContent = `${numeroA} é maior que ${numeroB}`;
        }
        else if (numeroA == numeroB) {
            campo_resposta.textContent = `${numeroA} é igual a ${numeroB}`;
        }
})