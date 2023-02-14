function contar() {
    
    let inicio = document.getElementById('txtinicio')
    let passo = document.getElementById('txtpasso')
    let fim = document.getElementById('txtfim')
    let res = document.getElementById('res')

    if (passo.value.length < 1 ) {
        
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        passo++

    }
    else if(inicio == 0){
        res.innerHTML = 'Impossivel contar'

    }
    else if(fim == 0){
        res.innerHTML = 'Impossivel contar'

    }
    else {
        let ini = Number(inicio.value)
        let pass = Number(passo.value)
        let final = Number(fim.value)

        if(ini < final) {
           for(let c = ini; c <= final; c += pass ){
               res.innerHTML += `${c} \u{1F449}`
           }
           
         }
        else {
            for(let c = ini; c <= final; c += pass ){
                res.innerHTML += `${c} \u{1F449}`
            }

        }
        
        res.innerHTML += `\u{1F3C1}`
        res.style.textAlign = 'center'
        
    }





}