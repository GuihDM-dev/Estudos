import { useState, useEffect} from 'react'

import styles from './Message.module.css'
//Componente para exibir mensagens, props para receber o texto da mensagem e o tipo (tipoo usado para definir dinamicamente diferentnes estilos para as mensagens)
function Message({text, type}) {

    //State para esconder a div se não houver mensagens exibidas
    const [visible, setVisible] = useState(false)
    
    //Condicional para manipular o state de acordo com a prop text que define se temos ou nao mensagens a serem exibidas
    useEffect(() => {
        //se text estiver vazio a mensagem e sua div não serão renderizadas
        
        if(!text) {
            setVisible(false)
            return
        }
        // Se não estiver vazio, state definido para true e a mensagem sera exibida
        setVisible(true)
        //Timer para retirar a mensagem após exibição
        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        //Return dando clear no timer para um fluxo saudauvel
        return () => clearTimeout(timer)

    }, [text])

    return (
        //Uso do fragment para não sujar o codigo com uma div vazia caso a mensagem nao esteja sendo exibida, abaixo condicional que renderiza a mensagem de acordo com o state criado anteriormente
        <>
        { visible && (
        <div className={`${styles.message} ${styles[type]}`}>
            {text}
        </div>
        )}
        </>
    )
}

export default Message