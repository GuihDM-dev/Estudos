import styles from '../projeto/ProjetoCard.module.css'

import {BsFillTrashFill} from 'react-icons/bs'

function ServiceCard({id, name, cost, description, key, handleRemove}) {
    //constante para passar os dados de remoção para o pai
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }

    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Custo total:</span> R${cost}
            </p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>

        </div>
    )
}

export default ServiceCard