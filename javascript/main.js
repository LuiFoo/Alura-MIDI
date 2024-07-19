function tocaSomDj(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName != 'audio') {
        console.log('Elemento não encontrado');
    }
    else {
        elemento.play()
    }

}

const teclasClidadas = document.querySelectorAll('.tecla');

for (let i = 0; i != teclasClidadas.length; i++) {

    const tecla = teclasClidadas[i];
    const instrumentoMusical = tecla.classList[1];
    const idRecebido = `#som_${instrumentoMusical}`;

    tecla.onclick = function() {
        tocaSomDj(idRecebido);
    };

    tecla.onkeydown = function(evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter')
            tecla.classList.add('ativa');
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
} 