let computador
let usuario = []
let tentativas = 0
let tentou = 10

function novoJogo(){
    window.location.reload()
}


function iniciar() {
    computador = Math.floor(Math.random() * 100 + 1)
}

function compare(){
    const usuario1 = Number(document.getElementById('entrada').value)
    usuario.push(' ' + usuario1) 
    document.getElementById('palpite').innerHTML = usuario

    if (tentou > tentativas){

        if (usuario1 > computador){
            document.getElementById('tentou').innerHTML = 'Palpite é muito alto'
            document.getElementById('entrada').value = ''
            tentativas++
            document.getElementById('tentativas').innerHTML = tentativas
        }
        else if (usuario1 < computador){
            document.getElementById('tentou').innerHTML = 'Palpite é muito baixo'
            document.getElementById('entrada').value = ''  
            tentativas++
            document.getElementById('tentativas').innerHTML = tentativas 
        }
        else {
            document.getElementById('tentou').innerHTML = 'Acertou, Parabéns!!!'
            tentativas++
            document.getElementById('tentativas').innerHTML = tentativas
            document.getElementById('entrada').setAttribute('Readonly', 'Readonly')
        }
    }

    else {
        document.getElementById('tentou').innerHTML = 'Game Over! O número do computador era ' + computador
        document.getElementById('entrada').value = ''  
        document.getElementById('entrada').setAttribute('Readonly', 'Readonly')
    }


    

}