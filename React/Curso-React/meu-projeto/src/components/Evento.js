import Button from "./evento/Button"

function Evento(){
    
    function meuEvento (){
        console.log(`Ativando o primeiro evento`)
    }
    
    function segundoEvento (){
        console.log("Ativando o segundo evento!")
    }

    return(
        <>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento}  text="Meu primeiro evento" />
            <Button event={segundoEvento}  text="Meu segundo evento" />
        </>
    )

}

export default Evento