import {parse, v4 as uuidv4} from 'uuid'

import styles from './Project.module.css'

import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ProjetoForm from '../projeto/ProjetoForm'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

function Project() {
    const {id} = useParams()
    
    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    //Acessa os dados do projeto de acordo com o ID acessado
    useEffect(() => {
        setTimeout (() => {
                fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setServices(data.services)
            })
            .catch(err => console.log(err))
        }, 1000)
    }, [id])
    

    function createService(project) {
        setMessage('')
        //Pegar ultimo serviço
        const lastService = project.services[project.services.length - 1]
        //cria id unico para gerar as listas
        lastService.id = uuidv4()
        //acessa o custo do ultimo serviço
        const lastServiceCost = lastService.cost
        //adiciona esse custo ao custo total do projeto atual sendo editado
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        //Validação do valor maximo
        if(newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            //remove o valor do objeto para nao ser adicionado
            project.services.pop()
            return false
        }

        //Adiciona custo do serviço ao custo total do projeto
        project.cost = newCost

        //Atualiza os dados do projeto
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
           setShowServiceForm(false)
        })
        .catch(err => console.log(err))
    }
    // remover um serviço da base
    function removeService(id, cost) {
        setMessage('')
        const servicesUpdated = project.services.filter(
            (service) => service.id !== id
            )
            //atualiza os projetos retirando o service escolhido para ser removido da lista
            const projectUpdated = project

            projectUpdated.services = servicesUpdated
            projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

            fetch(`http://localhost:5000/${projectUpdated.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(projectUpdated)
            }).then((resp) => resp.json())
            .then((data) => {
                setProject(projectUpdated)
                setServices(servicesUpdated)
                setMessage('Serviço Removido com sucesso !')
            })
            .catch(err => console.log(err))


    }

    //Funções responsaveis pelo toggle do botão de editar projeto e adcionar servico
    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    //Função responsavel pela edição do projeto acessado
    function editPost (project) {
        setMessage('')
        //console.log(project)
        //budget validation (nao diminuir o valor do orçamento para um valor menor que o custo atual)
        if(project.budget < project.cost){
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }
        //Salva no banco de dados a edição do projeto
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado!')
            setType('success')
        })
        .catch(err => console.log(err))
        

    }
    
    return (
        <>
        {project.name ? (
        <div className={styles.project_details} >
            <Container customClass="column">
                {message && <Message type={type} text={message} /> }
                <div className={styles.details_container} >
                    <h1>Projeto: {project.name}</h1>

                    <button onClick={toggleProjectForm} className={styles.btn} > 
                    { !showProjectForm ? 'Editar Projeto' : 'Fechar' }
                    </button>
                    { !showProjectForm ? (
                        <div className={styles.project_info} >
                            <p>
                                <span>Categoria:</span> {project.category.name}
                            </p>
                            <p>
                                <span>Total de Orçamento:</span> R${project.budget}
                            </p>
                            <p>
                                <span>Total Utilizado:</span> R${project.cost}
                            </p>
                        </div>
                    ) : (
                        <div className={styles.project_info} >
                            <ProjetoForm 
                            handleSubmit={editPost} 
                            btnText="Concluir edição" 
                            projectData={project} />   
                        </div>
                    )}
                </div>
                <div className={styles.service_form_container} >
                    <h2>Adicione um serviço:</h2>
                    <button className={styles.btn} onClick={toggleServiceForm} >
                        {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                    </button>
                    {showServiceForm && (
                    <div className={styles.project_info}>
                         <ServiceForm 
                            handleSubmit={createService}
                            btnText="Adicionar Serviço"
                            projectData={project}
                         />
                    </div>
                    )}
                </div>
                <h2>Serviços</h2>
                <Container customClass="start" >
                    {services.length > 0 &&
                        services.map((service) => (
                            <ServiceCard 
                                id={service.id}
                                name={service.name}
                                cost={service.cost}
                                description={service.description}
                                key={service.key}
                                handleRemove={removeService}
                            />
                        ))
                    
                    }
                    {services.length === 0 && <p>Não há serviços cadastrados.</p>}
                </Container>
            </Container>
        </div>
        
        )
        :
        (<Loading />)
        }
        </>
    )
}

export default Project