function SeuNome({setNome}) {
    return(
        <>
            <input 
            type="text" 
            placeholder="Qual é o seu nome?"
            onChange={(e) => setNome(e.target.value)}
            />

            
        </>
    )

}

export default SeuNome