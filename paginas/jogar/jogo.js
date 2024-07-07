let respostacerta  = document.getElementsByClassName('respostacerta')
let respostaerrada = document.getElementsByClassName('respostaerrada')
let butaonext = document.getElementById('butaonext')
let nextButaoContainer = document.getElementsByClassName('img-container')

let containerfinalizar = document.getElementById('containerfinalizar')
let butaofinalizar = document.getElementById('butaofinalizar')

for (let i = 0 ; i < respostacerta.length  ; i++) {
    respostacerta[i].addEventListener('click', acertou)
}

for (let i = 0  ; i < respostaerrada.length ; i++) {
    respostaerrada[i].addEventListener('click', errou)
}

let CONTA = []

function acertou() {
    if (CONTA.length === 9) {
        CONTA.push(1)
        this.style.backgroundColor = 'green'
        containerfinalizar.style.display = 'flex'
        butaofinalizar.style.display = 'block'
        console.log('Apareceu')

        for (c = 0; c < nextButaoContainer.length; c++)  {
            nextButaoContainer[c].style.display = 'none'
        }

    } else if (CONTA.length < 9){    
         this.style.backgroundColor  = 'green'
        console.log('Acerou!!!')
        CONTA.push(1)

    for (c = 0; c < nextButaoContainer.length; c++)  {
        nextButaoContainer[c].style.display = 'block'
    }

    for (let i = 0;  i < respostacerta.length; i++)  {
        respostacerta[i].disabled = true
    }

    for (let i = 0;  i < respostaerrada.length; i++)  {
        respostaerrada[i].disabled = true
    }
}

   
}

function errou() {
    if (CONTA.length === 9) {
        CONTA.push(0)
        this.style.backgroundColor = 'red'
        containerfinalizar.style.display = 'flex'
        butaofinalizar.style.display = 'block'
        console.log('Apareceu')
        for (c = 0; c < nextButaoContainer.length; c++)  {
            nextButaoContainer[c].style.display = 'none'
        }


    } else if (CONTA.length < 9) {
        this.style.backgroundColor  = 'red'
    CONTA.push(0)
    respostacerta.disabled = true
    console.log('Errou!!!')

    for (c = 0; c < nextButaoContainer.length; c++)  {
        nextButaoContainer[c].style.display = 'block'
    }

    for (let i = 0;  i < respostaerrada.length; i++)  {
        respostaerrada[i].disabled = true
    }
    for (let i = 0; i < respostacerta.length; i++) {
        respostacerta[i].disabled = true
    }
    }
}

for (let i =  0;  i < nextButaoContainer.length; i++) {
    nextButaoContainer[i].addEventListener('click', nextquestion)
}

function nextquestion() {
    let questao1 = document.getElementById('questao1')
    let questao2 = document.getElementById('questao2')
    let questao3 = document.getElementById('questao3')
    let questao4 = document.getElementById('questao4')
    let questao5 = document.getElementById('questao5')
    let questao6 = document.getElementById('questao6')
    let questao7 = document.getElementById('questao7')
    let questao8 = document.getElementById('questao8')
    let questao9 = document.getElementById('questao9')
    let questao10 = document.getElementById('questao10')
    
    if (CONTA.length === 1) {
        questao1.style.display = 'none'
        
        for (let i = 0 ; i < nextButaoContainer.length ; i++) {
            nextButaoContainer[i].style.display = 'none'
        }
        
        for  (let i = 0; i < respostacerta.length; i++) {
            respostacerta[i].disabled = false
        }
        
        for (let i =  0; i  < respostaerrada.length; i++) {
            respostaerrada[i].disabled = false
        }
        questao2.style.display = 'flex'
    }

    if (CONTA.length === 2)  {
        questao2.style.display = 'none'
        
        for (let i = 0 ; i < nextButaoContainer.length ; i++) {
            nextButaoContainer[i].style.display = 'none'
        }
        
        for  (let i = 0; i < respostacerta.length; i++) {
            respostacerta[i].disabled = false
        }
        
        for (let i =  0; i  < respostaerrada.length; i++) {
            respostaerrada[i].disabled = false
        }

        questao3.style.display = 'flex'
    }

    if (CONTA.length === 3) {
        questao3.style.display = 'none'
        
        for (let i = 0 ; i < nextButaoContainer.length ; i++) {
            nextButaoContainer[i].style.display = 'none'
        }
        
        for  (let i = 0; i < respostacerta.length; i++) {
            respostacerta[i].disabled = false
        }
        
        for (let i =  0; i  < respostaerrada.length; i++) {
            respostaerrada[i].disabled = false
        }
        questao4.style.display = 'flex'
    }

    if (CONTA.length === 4) {
        questao4.style.display = 'none'
        
        for (let i = 0 ; i < nextButaoContainer.length ; i++) {
            nextButaoContainer[i].style.display = 'none'
        }
        
        for  (let i = 0; i < respostacerta.length; i++) {
            respostacerta[i].disabled = false
        }
        
        for (let i =  0; i  < respostaerrada.length; i++) {
            respostaerrada[i].disabled = false
        }
        questao5.style.display = 'flex'
    }

    if (CONTA.length === 5) {
        questao5.style.display = 'none'
        
        for (let i = 0 ; i < nextButaoContainer.length ; i++) {
            nextButaoContainer[i].style.display = 'none'
        }
        
        for  (let i = 0; i < respostacerta.length; i++) {
            respostacerta[i].disabled = false
        }
        
        for (let i =  0; i  < respostaerrada.length; i++) {
            respostaerrada[i].disabled = false
        }
        questao6.style.display = 'flex'
    }

    if (CONTA.length === 6) {
        questao6.style.display = 'none'
        
        for (let i = 0 ; i < nextButaoContainer.length ; i++) {
            nextButaoContainer[i].style.display = 'none'
        }
        
        for  (let i = 0; i < respostacerta.length; i++) {
            respostacerta[i].disabled = false
        }
        
        for (let i =  0; i  < respostaerrada.length; i++) {
            respostaerrada[i].disabled = false
        }
        questao7.style.display = 'flex'
    }

    if (CONTA.length === 7) {
        questao7.style.display = 'none'
        
        for (let i = 0 ; i < nextButaoContainer.length ; i++) {
            nextButaoContainer[i].style.display = 'none'
        }
        
        for  (let i = 0; i < respostacerta.length; i++) {
            respostacerta[i].disabled = false
        }
        
        for (let i =  0; i  < respostaerrada.length; i++) {
            respostaerrada[i].disabled = false
        }
        questao8.style.display = 'flex'
    }

    if (CONTA.length === 8) {
        questao8.style.display = 'none'
        
        for (let i = 0 ; i < nextButaoContainer.length ; i++) {
            nextButaoContainer[i].style.display = 'none'
        }
        
        for  (let i = 0; i < respostacerta.length; i++) {
            respostacerta[i].disabled = false
        }
        
        for (let i =  0; i  < respostaerrada.length; i++) {
            respostaerrada[i].disabled = false
        }
        questao9.style.display = 'flex'
    }

    if (CONTA.length === 9) {
        questao9.style.display = 'none'
        
        for (let i = 0 ; i < nextButaoContainer.length ; i++) {
            nextButaoContainer[i].style.display = 'none'
        }
        
        for  (let i = 0; i < respostacerta.length; i++) {
            respostacerta[i].disabled = false
        }
        
        for (let i =  0; i  < respostaerrada.length; i++) {
            respostaerrada[i].disabled = false
        }
        console.log('s')
        questao10.style.display = 'flex'
    }
}

butaofinalizar.addEventListener('click', finalizar)

function finalizar() {
    var buceta = document.getElementById('buceta')
    var ressContainer = document.getElementById('ress-Container')
    var textocarregando = document.getElementById('carregando')
    var conteudoCarregando = textocarregando.querySelector('h1').textContent

    ressContainer.style.borderStyle = 'none'
    questao10.style.display = 'none'
    ressContainer.style.display = 'flex'
    ressContainer.style.alignItems = 'center'
    buceta.style.display = 'flex'

    var pontos = ''

    var carregarPontos = setInterval(function() {
        pontos += '.'
        if (pontos.length > 3) {
            pontos = ''
        }
        textocarregando.querySelector('h1').textContent = conteudoCarregando += pontos
    }, 1500)

    setTimeout(function() {
        let nota = document.getElementById('nota')
        let nota2 = document.getElementById('nota2')
        let nota3 = document.getElementById('nota3')
        ressContainer.style.border = '1px solid white'
        let voltaricon = document.getElementById('voltarimg')

        let p = document.createElement('p')

        p.style.fontSize = '2em'
        p.style.textAlign = 'center'

        clearInterval(carregarPontos)

        textocarregando.style.display = 'none'

        let complemento = CONTA.join('+')
        let resultado = eval(complemento)

        let ressultadodiv = document.getElementById('ressultado')

            if (resultado < 2){
    p.innerHTML = `IRMÃO??? TU ACERTOU <strong>UMA</strong> QUESTÃO? VAZA DA PATOGANG POR FAVOR SEU INÚTIL, ESTRUME DE MERDA DO CARALHO`
            nota2.textContent = `${resultado}/10`
            nota.style.display = 'flex'
            voltaricon.style.display = 'flex'
            }
        else if (resultado < 3) {
            p.innerHTML = `VOCÊ É UM IMPRESTÁVEL, TU SÓ CONSEGUIU ACERTAR <strong>${resultado}</strong> QUESTÕES, SE ENFORCA MLK, MENOS DE 3???? VOCE NAO É PATO GANG NEM FODENDO`
            nota2.textContent = `${resultado}/10`
            nota.style.display = 'flex'
            voltaricon.style.display = 'flex'


        } else if (resultado < 7)  {
            p.textContent =  'QUASE VOCE VIROU UM PATOGANG, SE TIVESSE ESTUDADO MAIS VOCE TERIA CONSEGUIDO, AGORA VAI TER QUE IR PRA RECUPERAÇÃO OTARIO'
            nota2.textContent = `${resultado}/10`
            nota.style.display = 'flex'
            voltaricon.style.display = 'flex'


        } else if (resultado <= 9) {
            p.innerHTML = 'PARABÉNS VC ACERTOU <strong>70%</strong> DAS QUESTÕES, VC É UM PATOGANG POR ENQUANTO, AGUARDE OS PRÓXIMOS TESTES...'
            nota2.textContent = `${resultado}/10`
            nota.style.display = 'flex'
            voltaricon.style.display = 'flex'
        } else {
            p.innerHTML = 'CARALHO IRMÃO VOCÊ GABARITOU ESSA PORRA PARABÉNS, NEM VAI PRECISAR IR PRO TESTE FINAL, VOCÊ É UM PATOGANG DE VERDADE!!!!'
            nota2.textContent = `${resultado}/10`
            nota.style.display = 'flex'
            voltaricon.style.display = 'flex'
        }
        nota3.appendChild(p)
    }, 5000)
    
}   