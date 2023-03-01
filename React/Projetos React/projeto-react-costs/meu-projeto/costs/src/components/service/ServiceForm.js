import {useState} from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../projeto/ProjetoForm.module.css'

function ServiceForm({handleSubmit, btnText, projectData}) {
    
    const [service, setService] = useState({})
    //função que envia os dados do projeto
    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    //Envia os valores preenchidos no formulario.
    function handleChange(e) {
        setService({...service, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
                text="Nome do Serviço"
                type="text"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />
            <Input 
                type="number"
                text="Custo do Serviço"
                name="cost"
                placeholder="Insira o valor total do serviço"
                handleOnChange={handleChange}
            />
            <Input 
                type="text"
                text="Descrição do Serviço"
                name="descriptiion"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ServiceForm