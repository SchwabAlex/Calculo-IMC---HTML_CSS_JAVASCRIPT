
function calcular() {
    let nome = document.getElementById('nome').value
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    let resultado = document.getElementById('resultado')
    
    let masculino = document.getElementById('masculino')
    let feminino = document.getElementById('feminino')

    if (nome == '') {
        alert('Entrada inválida.    Digite o seu nome.')
    }
    if (masculino.checked && feminino.checked) {
        alert('VC SÓ PODE ESCOLHER UM GENERO')}
    else if(masculino.checked == false && feminino.checked == false){
        alert('VOCE DEVE ESCOLHER UM GENERO')
    }
    

    let imc = (peso / (altura * altura)).toFixed(2).replace('.', ',')
    resultado.innerHTML = (`${nome} seu IMC é ${imc}`)
    document.getElementById('peso').value = ''
    this.imc = imc
    //localStorage.setItem('imc', `${imc}`)
    //let aa = localStorage.getItem('imc')
    //console.log (imc)   
}
console.log(this.imc)


