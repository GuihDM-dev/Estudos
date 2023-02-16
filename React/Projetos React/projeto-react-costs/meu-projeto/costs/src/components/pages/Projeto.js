import { useLocation } from "react-router-dom"

import Message from "../layout/Message"

function Projeto () {
    //uso do hook location
    const location = useLocation()
    //inicializo com uma mensagem vazia
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    return(
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message type="success"  text={message} />}
        </div>
    )
}

export default Projeto