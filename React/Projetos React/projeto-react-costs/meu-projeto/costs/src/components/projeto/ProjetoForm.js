import {useState, useEffect} from 'react'


import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjetoForm.module.css'

function ProjetoForm({btnText, handleSubmit, projectData}) {

    //Receber os dados e verificar se estão vazios o não
    const [project, setProject] = useState(projectData || {})

    //Set das categorias
    const [categories, setCategories] = useState([])

    //metodo para enviar categorias para o select por get
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((resp) => resp.json())
        .then((data) => {setCategories(data)})
        .catch(err => console.log(err))
    }, [])

    //Metodo de submit
    const submit = (e) => {
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
    }
    
    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProject({ 
        ...project, 
        category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
        },
    })
    }

    return(
        
        <form /*Envia os dados */ onSubmit={submit} className={styles.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" 
            handleOnChange={handleChange} value={project.name ? project.name : ''}/>

            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total"
            handleOnChange={handleChange} value={project.budget ? project.budget : ''} />
            
            <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
            />
            
            <SubmitButton text={btnText}  />
        </form>
        
    )
}

export default ProjetoForm