import { useLocation } from "react-router-dom"
import {useState, useEffect} from 'react'

import Message from "../layout/Message"
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjetoCard from '../projeto/ProjetoCard'

import styles from './Projeto.module.css'

function Projeto () {

    const [projects, setProjects] = useState([])

    useEffect(() => {

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
        })
        .catch(err => console.log(err))
    }, [])


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

            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => <ProjetoCard 
                    name={project.name}
                    id={project.id}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}
                    
                     />
                )}
            </Container>
        </div>
    )
}

export default Projeto