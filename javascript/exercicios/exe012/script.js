let num = document.querySelector('input#txtn')
let lista = document.getElementById('txtt')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
    
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar() {
    
    if(isNumero(num.value) && ! inLista(num.value, valores)){
        
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Adicionou ${num.value} na array`
        lista.appendChild(item)
        res.innerHTML = ''

    }
    else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
  





}
function finalizar() {
    if (valores.length == 0){
    alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        
        

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            
            if (valores[pos] < menor)
                menor = valores[pos]
            
        }

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi o ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi o ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma} </p>`
        res.innerHTML += `<p> A média é ${soma/2} </p>`
        
    } 
    

} 
