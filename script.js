var carta1 = {
    nome: 'Pterodáctilo',
    imagem: 'https://images.vexels.com/media/users/3/196891/isolated/preview/f0ca90aa1e63b33590a4368fa8e486ca-ilustracao-de-dinossauro-pterodactilo.png',
    atributos: {
        Altura: 0.75,
        Comprimento: 1,
        Peso: 8,
        Idade: 150
    }
}
var carta2 = {
    nome: 'Velociráptor',
    imagem: 'https://www.pngmart.com/files/6/Velociraptor-PNG-Photo.png',
    atributos: {
        Altura: 0.50,
        Comprimento: 2,
        Peso: 45,
        Idade: 85
    }
}
var carta3 = {
    nome: 'Tiranossauro Rex',
    imagem: 'https://www.pngmart.com/files/7/T-Rex-PNG-Transparent-Picture.png',
    atributos: {
        Altura: 6.5,
        Comprimento: 13,
        Peso: 270,
        Idade: 66
    }
}
var carta4 = {
    nome: 'Triceratops',
    imagem: 'https://i.pinimg.com/originals/15/cc/09/15cc09a608484fa57ee97725655bbfdc.png',
    atributos: {
        Altura: 3.5,
        Comprimento: 9,
        Peso: 5000,
        Idade: 66
    }
}

var cartas = [carta1, carta2, carta3, carta4]

var cartaMaquina
var cartaJogador

function sortearCarta() {
    document.getElementById('resultado').innerHTML = ''
    document.getElementById('carta-maquina').innerHTML = ''

    var numeroCartaMaquina = parseInt(Math.random() * 4)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 4)

    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 4)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
    console.log(cartaMaquina)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false


    exibirCartaJogador()
}


function obtemSelecao() {
    var radioAtributos = document.getElementsByName('atributo')

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }

}

function jogar() {

    var atributoSelecionado = obtemSelecao()
    var divResultado = document.getElementById('resultado')

    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]


    if (valorCartaJogador > valorCartaMaquina) {
        elemtentoResultado = '<p class="resultado-final"><h3>Você venceu!</h3>'
        //elemtentoResultado.innerHTML = '<h3>Você venceu!</h3> <br>O seu oponente era: ' + cartaMaquina.nome + '<br><img class="carta" src=' + cartaMaquina.imagem + '>'
    } else if (valorCartaJogador < valorCartaMaquina) {
        elemtentoResultado = '<p class="resultado-final"><h3>Você perdeu!</h3>'
        //elemtentoResultado.innerHTML = '<h3>Você perdeu!</h3> <br>O seu oponente era: ' + cartaMaquina.nome + '<br><img class="carta" src=' + cartaMaquina.imagem + '>'
    } else {
        elemtentoResultado = '<p class="resultado-final"><h3>Empatou!</h3>'
        //elemtentoResultado.innerHTML = '<h3>Empate!</h3> <br>O seu oponente era: ' + cartaMaquina.nome + '<br><img class="carta" src=' + cartaMaquina.imagem + '>'
    }
    divResultado.innerHTML = elemtentoResultado

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true

    exibirCartaMaquina()

}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador')
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'

    var tagHTML = '<div id="opcoes" class="carta-status">'

    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "' checked>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina')
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'

    var tagHTML = '<div id="opcoes" class="carta-status">'

    var opcoesTexto = ""
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p id='atributo-maquina' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</=><br>"
    }

    var nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}