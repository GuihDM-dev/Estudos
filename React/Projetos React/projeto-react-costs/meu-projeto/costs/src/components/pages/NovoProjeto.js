import {useNavigate } from 'react-router-dom'
import ProjetoForm from '../projeto/ProjetoForm'
import styles from './NovoProjeto.module.css'

function NovoProjeto () {

    const history = useNavigate()

    function createPost(project) {

        //Initialize cost and services
        project.cost = 0
        project.services = []

        //Fetch para enviar dados dos projetos para o banco
        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // redirect
            history('/projeto', {message: 'Projeto criado com sucesso!'})
        })
        .catch(err => console.log(err))
    }

    return(
        <section className={styles.novoprojeto_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm /*Prop que passa os dados para o formulario*/ handleSubmit={createPost}  btnText="Criar projeto"/>
        </section> 
    )
}

export default NovoProjeto