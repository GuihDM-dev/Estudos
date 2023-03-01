import { useLocation } from "react-router-dom"
import {useState, useEffect} from 'react'

import Message from "../layout/Message"
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ProjetoCard from '../projeto/ProjetoCard'

import styles from './Projeto.module.css'

function Projeto () {
    //Constantes do componente de Loading dos projetos
    const [removeLoading, setRemoveLoading] = useState(false)
    //Constantes para salvar os projetos requisitados via get
    const [projects, setProjects] = useState([])
    //State de Mensagem
    const [projectMessage, setProjectMessage] = useState('')
    
    
    //useEffect para requisitar proojoetos do db.json improvisado
    useEffect(() => {
        //timeout para simular tempo de carregamento e ver o componente de loading
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch(err => console.log(err))
        }, 1000)
        
    }, [])
    
    //remover Projeto
    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(data => {
            setProjects(projects.filter((project) => project.id !== id ))
            //messagem de remoção
            setProjectMessage('Projeto Removido com sucesso!')
        })
        .catch(err => console.log(err))
    }


    //uso do hook location
    const location = useLocation()
    //inicializo com uma mensagem vazia
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    return(
        <div className={styles.projeto_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/novoprojeto" text='Criar Projeto' />
            </div>
            {message && <Message type="success"  text={message} />}
            {projectMessage && <Message type="success"  text={projectMessage} />}
            <Container customClass="start">
                {//Loop para exibir os cards de cada projeto da base
                projects.length > 0 &&
                    projects.map((project) => (
                    <ProjetoCard 
                    name={project.name}
                    id={project.id}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}
                    handleRemove={removeProject}
                    
                     />
                ))}
                
                {//Condicional para exibir o icone de loading
                !removeLoading && <Loading />
                }

                {//Condicional que se nao existirem projetos cadastrados exibe uma mensagem
                removeLoading && projects.length === 0 &&
                    <p>Não há Projetos cadastrados!</p>
                }
            </Container>
        </div>
    )
}

export default Projeto