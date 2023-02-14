import { useState } from 'react'



function Condicional () {
    
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail (e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail() {
        setUserEmail('')
    }


    return(
        <>
            <h2>Cadastre o seu Email</h2>
            <form>
                <input 
                type="email" placeholder='Digite o seu Email...' 
                onChange={(e) => setEmail(e.target.value)} 
                />
                <button onClick={enviarEmail}>Enviar email</button> 
                {userEmail && (
                    <div>
                        O Email do usuario é {userEmail}
                        <br/>
                        <button onClick={limparEmail} > Limpar Email</button>
                    </div>
                )}
            </form>
        </>
    )
}

export default Condicional